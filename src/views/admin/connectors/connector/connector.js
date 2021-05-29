import React, { useState, useEffect, useContext } from "react";
import Layout from "../../../../aonComponents/layout";
import Button from "../../../../aonComponents/Button";
import NewConnector from "./newConnector";
import AonContext from "../../../../context/aonContext";
import addConnectorService from "../../../../services/addConnectorService";
import getConnectorService from "../../../../services/getConnectorService";
import testConnectorService from "../../../../services/testConnectorService";
import updateConnector from "../../../../services/connectorUpdateService";
import Overlay from "../../../../aonComponents/overlay";
import ConnectorTest from "./connectorTest";
import Loader from "./loader";
import "./style.scss";
import { useHistory, useParams } from "react-router-dom";

function Connector() {
  const {
    stepperData,
    nextPage,
    step1Data,
    step2Data,
    oauth,
    userCredentials,
    setConnector,
    jwtToken,
    setConnection,
    resetStepData,
    isEdit,
    setEdit,
    editRecord,
    customConfiguration,
    setStep1Data,
    setStep2Data,
    setOauthData,
  } = useContext(AonContext);

  let history = useHistory();
  console.log("context", useContext(AonContext));
  let { id } = useParams();

  useEffect(() => {
    async function getConnector(id) {
      if (step1Data.name === "") {
        setEdit(true);
        const result = await getConnectorService(id, jwtToken);
        console.log("result = ", result);

        if (result.connector) {
          const {
            name,
            img,
            desc,
            connectionName,
            authenticationURL,
            fetchDataURL,
            authenticationType,
            connectors,
          } = result.connector;
          setStep1Data({
            name,
            img,
            desc,
          });

          setStep2Data({
            connectionName,
            authenticationURL,
            fetchDataURL,
            authenticationType,
          });

          if (authenticationType === "OAuth2") {
            connectors[1].value = "";
            setOauthData(connectors);
          }
        }
      }
    }
    id && getConnector(id);
  }, [id]);

  const [showOverlay, setShowOverlay] = useState(false);
  const [isLoading, setLoading] = useState(false);
  const [testData, setTestData] = useState([]);
  const [hasError, setError] = useState(false);

  const title =
    stepperData.page === 1
      ? "Basic details of Connector"
      : "Required fields for making new connector";
  const headding = isEdit ? "Edit Connector" : "Add New Connector";

  const addNewConnector = async () => {
    let data;
    if (step2Data.authenticationType === "OAuth2") {
      data = oauth;
    } else if (step2Data.authenticationType === "User Credentials") {
      data = userCredentials;
    } else if (step2Data.authenticationType === "Certificate") {
      //need to handle
    } else if (step2Data.authenticationType === "Custom") {
      data = customConfiguration;
    }
    const finalData = { ...step1Data, ...step2Data, fields: [...data] };
    if (isEdit) {
      const result = await updateConnector(editRecord, finalData, jwtToken);
      if (result) {
        history.push("/connector/list");
        // const connectorData = await getConnectorListService(jwtToken);
        // if (connectorData.connector) {
        //   setConnector(connectorData.connector);
        //   setConnection(false);
        //   resetStepData();
        // }
      }
    } else {
      const result = await addConnectorService(finalData, jwtToken);
      if (result && result.success) {
        history.push("/connector/list");
        // const connectorData = await getConnectorListService(jwtToken);
        // if (connectorData.connector) {
        //   setConnector(connectorData.connector);
        //   setConnection(false);
        //   resetStepData();
        // }
      }
    }
  };

  const testConnector = async () => {
    const data = {
      authenticationURL: step2Data.authenticationURL,
      fetchDataURL: step2Data.fetchDataURL,
      userName: oauth[0].value,
      password: oauth[1].value,
      clientId: oauth[2].value,
      clientSecret: oauth[3].value,
    };
    setShowOverlay(true);
    setLoading(true);
    const res = await testConnectorService(data, jwtToken);
    if (res && res.success) {
      setLoading(false);
      setTestData(res.result.sobjects);
      setError(false);
    } else {
      setError(true);
      setLoading(false);
      setTestData([]);
    }
  };

  const buttonText = isEdit ? "Test Connector" : "Test New Connector";
  const saveBtnText = isEdit ? "Update & Close" : "Save & Close";
  const isNextDisabled = Object.keys(step1Data).some(function (obj) {
    return step1Data[obj] === "";
  });
  let isDisabled;
  isDisabled = Object.keys(step2Data).some(function (obj) {
    return step2Data[obj] === "";
  });
  if (!isDisabled) {
    if (step2Data.authenticationType === "OAuth2") {
      isDisabled = oauth.filter((item) => item.value === "").length > 0;
    } else if (step2Data.authenticationType === "User Credentials") {
      isDisabled = userCredentials.filter((item) => item.value === "").length;
    } else if (step2Data.authenticationType === "Certificate") {
      //need to handle
    } else if (step2Data.authenticationType === "Custom") {
      isDisabled =
        customConfiguration.filter((item) => item.value === "").length > 0;
    }
  }

  return (
    <div className="stepper-area">
      <div className="back-page">
        <img
          className="back-arrow"
          src="img/back-arrow.svg"
          alt="back arrow"
          onClick={history.goBack}
        />
        <p className="selected-item">{headding}</p>
      </div>

      <Layout>
        <Layout.Header {...{ title }}>
          {stepperData.page === 1 && (
            <Button
              type="button"
              classes="float-right"
              handler={nextPage}
              disabled={isNextDisabled}
            >
              Next
            </Button>
          )}
          {stepperData.page === 2 && (
            <Button
              type="button"
              classes="float-right"
              handler={testConnector}
              disabled={isDisabled}
            >
              {buttonText}
            </Button>
          )}
        </Layout.Header>
        <Layout.Body>
          <NewConnector />
        </Layout.Body>
      </Layout>

      {showOverlay && (
        <Overlay>
          <Overlay.Header
            title="Preview"
            handler={() => {
              setShowOverlay(false);
            }}
          />
          {isLoading ? (
            <Overlay.Body>
              <Loader />
            </Overlay.Body>
          ) : (
            <Overlay.Body>
              <ConnectorTest hasError={hasError} data={testData} />
            </Overlay.Body>
          )}
          <Overlay.Footer>
            <div className="align-center">
              <Button
                type="button"
                className="btn btn-red mx-2"
                handler={() => {
                  setShowOverlay(false);
                }}
              >
                Close
              </Button>
              {!isLoading && !hasError && (
                <Button
                  type="button"
                  classes="align-center"
                  handler={addNewConnector}
                >
                  {saveBtnText}
                </Button>
              )}
            </div>
          </Overlay.Footer>
        </Overlay>
      )}
    </div>
  );
}

export default React.memo(Connector);

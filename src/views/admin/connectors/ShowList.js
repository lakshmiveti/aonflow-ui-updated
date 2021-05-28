/**
 * Author: Pradeep Mandalapu
 * Type: Reusable Component
 * Objective: To render list of connectors
 */

import React, { useMemo, useState, useContext } from "react";
import ConnectorLayout from "../../../aonComponents/ConnectorLayout";
import AonContext from "../../../context/aonContext";
import Overlay from "../../../aonComponents/overlay";
import Button from "../../../aonComponents/Button";
import deleteConnector from "../../../services/deleteConnectorService";
import { useHistory } from "react-router-dom";

const ShowList = () => {
  const {
    connector,
    // setConnection,
    setStep1Data,
    setStep2Data,
    setOauthData,
    setEdit,
    setEditRecord,
    jwtToken,
    setConnector,
  } = useContext(AonContext);

  const history = useHistory();
  const [showPopup, setShowPopup] = useState(false);
  const [id, setId] = useState("");

  const editConnector = (id) => {
    setEditRecord(id);
    setEdit(true);
    const selectedConnector = connector.filter((obj) => obj.id === id)[0];
    if (selectedConnector) {
      setStep1Data({
        name: selectedConnector.name,
        img: selectedConnector.img,
        desc: selectedConnector.desc,
      });

      setStep2Data({
        connectionName: selectedConnector.connectionName,
        authenticationURL: selectedConnector.authenticationURL,
        fetchDataURL: selectedConnector.fetchDataURL,
        authenticationType: selectedConnector.authenticationType,
      });

      if (selectedConnector.authenticationType === "OAuth2") {
        selectedConnector.connectors[1].value = "";
        setOauthData(selectedConnector.connectors);
      }
      // setConnection(true);
      console.log("edit");
      history.push("/connector/edit");
    }
  };

  const deleteConnectorFun = async (id) => {
    const result = await deleteConnector(id, jwtToken);
    console.log("result", result);
    if (result.success) {
      setId("");
      setShowPopup(false);
      const updateddata = connector.filter((obj) => obj.id !== id);
      setConnector(updateddata);
    }
  };

  const getConnector = (id) => {
    setId(id);
    setShowPopup(true);
  };
  // const list =
  //   connector.length &&
  //   connector.map((item) => {
  //     return (
  //       <ConnectorLayout
  //         key={item.id}
  //         logoUrl={`http://13.235.55.86/api/v1/file/fetch/${item.img}`}
  //         handler={getConnector}
  //         connectionName={item.name}
  //         desc={item.desc}
  //         buttonTitle="Edit Connector"
  //         img={item.img}
  //         id={item.id}
  //         buttonHandler={editConnector}
  //       />
  //     );
  //   });

  const list = useMemo(() => {
    return connector.map((item) => {
      return (
        <ConnectorLayout
          key={item.id}
          logoUrl={`http://13.235.55.86/api/v1/file/fetch/${item.img}`}
          handler={getConnector}
          connectionName={item.name}
          desc={item.desc}
          buttonTitle="Edit Connector"
          img={item.img}
          id={item.id}
          buttonHandler={editConnector}
        />
      );
    });
  }, [connector]);

  return (
    <>
      <div className="row">{list}</div>
      {showPopup && (
        <Overlay classes="modal-confirm-main">
          <Overlay.Body classes="modal-confirm-body">
            <p className="confirm-message">Are you sure want to delete ?</p>
          </Overlay.Body>
          <Overlay.Footer>
            <div className="align-center">
              <Button
                type="button"
                className="btn btn-red mx-2"
                handler={() => deleteConnectorFun(id)}
              >
                Yes
              </Button>
              <Button
                type="button"
                classes="align-center"
                handler={() => setShowPopup(false)}
              >
                No
              </Button>
            </div>
          </Overlay.Footer>
        </Overlay>
      )}
    </>
  );
};

export default React.memo(ShowList);

/**
 * Author: Lakshman Veti
 * Type: Modal
 * Objective: To render fields and labels in search tables
 * Usage: Search
*/


const fields = {
  fileListFields : [
    { key: 'row', label:'S.no' },
    { key: 'filename', label:'Filename' },
    { key: 'user', label:'Uploaded By' },
    { key: 'createdAt', label:'Upload Date' },
    {
      key: 'show_details',
      label: '',
      sorter: false,
      filter: false
    }
  ],
  invoicesItems:[
    { key: 'NameSupplier',label:'Vendor' },
    { key: 'NumberSOW',label:'SOW' },
    { key: 'IdContract',label:'Contract Id' },
    { key: 'NumberPO',label:'PO Number' },
    { key: 'NumberInvoice',label:'Invoice No' },
    { key: 'DateInvoice',label:'Invoice Date'},
    { key: 'invpricRoleIdentifierMilestone',label:'Milestone/Role Flag'},
    { key: 'invpricEmpTitle',label:'Milestone/Role' },
    { key: 'invpricDescription',label:'Description',_style: { width: '20%'}},
    { key: 'engagement_type', label:'Contract Type' },
    { key: 'invpricQty', label:'Qty' },
    { key: 'invpricRate', label:'Price' },
    { key: 'invpricUom', label:'UOM' },
    // { key: 'prcTotalAmount', label:'Total Amount' },
  ],
  contactsItems:[
    { key: 'NameSupplier',label:'Vendor' },
    { key: 'NumberSOW',label:'SOW' },
    { key: 'NumberAmendment',label:'Amendment' },
    { key: 'IdContract',label:'Contract Id' },
    { key: 'CustRepName',label:'Customer Rep' },
    { key: 'CustRepTitle',label:'Cust Role'},
    { key: 'CustRepSignDate',label:'Cust Sign Date'},
    { key: 'VendorRepName',label:'Vendor Rep'},
    { key: 'VendorRepTitle',label:'Vendor Role'},
    { key: 'VendorRepSignDate',label:'Vendor Sign Date'},
  ],
  commercialsItems:[
    { key: 'NameSupplier',label:'Vendor' },
    { key: 'NumberSOW',label:'SOW' },
    { key: 'NumberAmendment',label:'Amendment' },
    { key: 'IdContract',label:'Contract Id' },
    { key: 'NameProject',label:'Project' },
    { key: 'SowValue',label:'Sow Value'},
    { key: 'PlatSystemsArea',label:'Tech Stack'},
  ],
  milestonesItems:[
    { key: 'NameSupplier',label:'Vendor' },
    { key: 'NumberSOW',label:'SOW' },    
    { key: 'milRoleIdentifierMilestone', label:'Milestone Flag' },
    { key: 'milEmpTitle', label:'Milestone' },
    { key: 'milLineAmount', label:'Line Amount' },
  ],
  resourcesItems:[
    { key: 'NameSupplier',label:'Vendor' },
    { key: 'NumberSOW',label:'SOW' },
    { key: 'NumberAmendment',label:'Amendment' },
    { key: 'IdContract',label:'Contract Id' },
    { key: 'NameProject',label:'Project' },
    { key: 'prcRoleIdentifierMilestone', label:'Role Flag' },
    { key: 'prcEmpTitle', label:'Role' },
    { key: 'prcRate', label:'Rate' },
    { key: 'prcLineAmount', label:'Line Tot' },
    //  key: 'prcDescription',label:'Description',_style: { width: '30%'}},
    { key: 'SowValue',label:'Sow Value'},
    { key: 'prcLocation', label:'Location' }
    
  ]
};


export default fields;

<?php
$strIp = $_SERVER['REMOTE_ADDR'];

switch($_GET['function']) {
    //--ТЕРРИТОРИАЛЬНЫЕ ОРГАНЫ
    case "getListDISTRICT": echo selectDB("SELECT * FROM CDISTRICT ORDER BY CSORT ASC"); break;
    // case "addDistrict": echo executeDB("BEGIN :stringReturn:=PCATALOG.ADDDISTRICT('" . $_POST['iname'] . "'); END;"); break;
    // case "changeDistrict": echo executeDB("BEGIN :stringReturn:=PCATALOG.CHANGEDISTRICT('" . $_POST['iid'] . "', '" . $_POST['iname'] . "'); END;"); break;
    // case "activeDistrict": echo executeDB("BEGIN :stringReturn:=PCATALOG.ACTIVEDISTRICT('" . $_POST['iid'] . "', '" . $_POST['ivisible'] . "'); END;"); break;

    //--ОТДЕЛЫ
    case "getListDEPARTMENT": echo selectDB("SELECT * FROM CDEPARTMENT ORDER BY CNAME ASC"); break;
    case "sumUsedActiveDEPARTMENT": echo selectDB("SELECT COUNT(ID) AS COUNTITEM FROM UUSER_DEPARTMENT WHERE UDEPARTMENT_ID='" . $_GET['valueId'] . "' AND UVISIBLE='1'"); break;
    case "sumUsedInactiveDEPARTMENT": echo selectDB("SELECT COUNT(ID) AS COUNTITEM FROM UUSER_DEPARTMENT WHERE UDEPARTMENT_ID='" . $_GET['valueId'] . "' AND UVISIBLE='0'"); break;
    case "addingDEPARTMENT": echo executeDB("BEGIN :stringReturn:=PCATALOG.ADDING_DEPARTMENT('" . $_GET['valueName'] . "'); END;"); break;
    case "switchDEPARTMENT": echo executeDB("BEGIN :stringReturn:=PCATALOG.SWITCH_DEPARTMENT('" . $_GET['valueId'] . "', '" . $_GET['valueVisible'] . "'); END;"); break;
    //case "changeDepartment": echo executeDB("BEGIN :stringReturn:=PCATALOG.CHANGEDEPARTMENT('" . $_POST['iid'] . "', '" . $_POST['iname'] . "'); END;"); break;
    case "deleteDEPARTMENT": echo executeDB("BEGIN :stringReturn:=PCATALOG.DELETE_DEPARTMENT('" . $_GET['valueId'] . "'); END;"); break;
    
    //--ДОЛЖНОСТИ
    case "getListPOST": echo selectDB("SELECT * FROM CPOST ORDER BY CNAME ASC"); break;
    case "sumUsedActivePOST": echo selectDB("SELECT COUNT(ID) AS COUNTITEM FROM UUSER_POST WHERE UPOST_ID='" . $_GET['valueId'] . "' AND UVISIBLE='1'"); break;
    case "sumUsedInactivePOST": echo selectDB("SELECT COUNT(ID) AS COUNTITEM FROM UUSER_POST WHERE UPOST_ID='" . $_GET['valueId'] . "' AND UVISIBLE='0'"); break;
    case "addingPOST": echo executeDB("BEGIN :stringReturn:=PCATALOG.ADDING_POST('" . $_GET['valueName'] . "'); END;"); break;
    case "switchPOST": echo executeDB("BEGIN :stringReturn:=PCATALOG.SWITCH_POST('" . $_GET['valueId'] . "', '" . $_GET['valueVisible'] . "'); END;"); break;
    // case "changePost": echo executeDB("BEGIN :stringReturn:=PCATALOG.CHANGEPOST('" . $_POST['iid'] . "', '" . $_POST['iname'] . "'); END;"); break;
    case "deletePOST": echo executeDB("BEGIN :stringReturn:=PCATALOG.DELETE_POST('" . $_GET['valueId'] . "'); END;"); break;

    //--ВХОДЯЩИЕ ДОКУМЕНТЫ
    case "getListDOCUMENT_INPUT": echo selectDB("SELECT * FROM CDOCUMENTINPUT ORDER BY CNAME ASC"); break;
    case "sumUsedActiveDOCUMENT_INPUT": echo selectDB("SELECT COUNT(ID) AS COUNTITEM FROM RUSER_DOCUMNETINPUT WHERE RDOCUMENTINPUT_ID='" . $_GET['valueId'] . "' AND RVISIBLE='1'"); break;
    case "sumUsedInactiveDOCUMENT_INPUT": echo selectDB("SELECT COUNT(ID) AS COUNTITEM FROM RUSER_DOCUMNETINPUT WHERE RDOCUMENTINPUT_ID='" . $_GET['valueId'] . "' AND RVISIBLE='0'"); break;
    case "addingDOCUMENT_INPUT": echo executeDB("BEGIN :stringReturn:=PCATALOG.ADDING_DOCUMENT_INPUT('" . $_GET['valueName'] . "', '" . $_GET['valueVerify'] . "'); END;"); break;
    case "switchDOCUMENT_INPUT": echo executeDB("BEGIN :stringReturn:=PCATALOG.SWITCH_DOCUMENT_INPUT('" . $_GET['valueId'] . "', '" . $_GET['valueVisible'] . "'); END;"); break;
    // case "changeDocIn": echo executeDB("BEGIN :stringReturn:=PCATALOG.CHANGEDOCIN('" . $_POST['iid'] . "', '" . $_POST['iname'] . "'); END;"); break;

    //--ИСХОДЯЩИЕ ДОКУМЕНТЫ
    case "getListDOCUMENT_OUTPUT": echo selectDB("SELECT * FROM CDOCUMENTOUTPUT ORDER BY CNAME ASC"); break;
    case "sumUsedActiveDOCUMENT_OUTPUT": echo selectDB("SELECT COUNT(ID) AS COUNTITEM FROM RUSER_DOCUMNETOUTPUT WHERE RDOCUMENTOUTPUT_ID='" . $_GET['valueId'] . "' AND RVISIBLE='1'"); break;
    case "sumUsedInactiveDOCUMENT_OUTPUT": echo selectDB("SELECT COUNT(ID) AS COUNTITEM FROM RUSER_DOCUMNETOUTPUT WHERE RDOCUMENTOUTPUT_ID='" . $_GET['valueId'] . "' AND RVISIBLE='0'"); break;
    case "addingDOCUMENT_OUTPUT": echo executeDB("BEGIN :stringReturn:=PCATALOG.ADDING_DOCUMENT_OUTPUT('" . $_GET['valueName'] . "', '" . $_GET['valueVerify'] . "'); END;"); break;
    case "switchDOCUMENT_OUTPUT": echo executeDB("BEGIN :stringReturn:=PCATALOG.SWITCH_DOCUMENT_OUTPUT('" . $_GET['valueId'] . "', '" . $_GET['valueVisible'] . "'); END;"); break;
    // case "changeDocOut": echo executeDB("BEGIN :stringReturn:=PCATALOG.CHANGEDOCOUT('" . $_POST['iid'] . "', '" . $_POST['iname'] . "'); END;"); break;

    //--АДМИНИСТРАТОРЫ
    case "getListSECURITY_ADMIN": echo selectDB("SELECT * FROM USECURITYADM_LEVELACCESS_VI ORDER BY CCODELEVELACCESS DESC, CNAMEFULL ASC"); break;
    case "addingSECURITY_ADMIN": echo executeDB("BEGIN :stringReturn:=PCATALOG.ADDING_SECURITY_ADMIN('" . $_GET['valueFioFull'] . "', '" 
                                                                                                        . $_GET['valueFioShort'] . "', '"
                                                                                                        . $_GET['valueIp'] . "', '"
                                                                                                        . $_GET['valueAccessLevel'] . "'); END;"); break;
}

function selectDB($stringQuery) {
  if (!$stringConnection = oci_connect("C##QSECOFR","Ufkfrnbrf","XE","AL32UTF8")) {return json_encode("Error connecting to Database#");}
  $arrReturn = [];
  $stringQuery = ociparse($stringConnection, $stringQuery);
  ociexecute($stringQuery, OCI_DEFAULT);
  while($row = oci_fetch_assoc($stringQuery)) {
    $arrReturn[] = $row;
  }
  return json_encode($arrReturn, JSON_UNESCAPED_UNICODE);
}

function executeDB($stringQuery) {
  if (!$stringConnection = oci_connect("C##QSECOFR","Ufkfrnbrf","XE","AL32UTF8")) {return "Error connecting to Database#";}
  $stringReturn = "0";
  $stringQuery = ociparse($stringConnection, $stringQuery);
  ocibindbyname($stringQuery,':stringReturn',$stringReturn, 255);
  ociexecute($stringQuery, OCI_DEFAULT);
  oci_close($stringConnection);
  return $stringReturn;
}

?>
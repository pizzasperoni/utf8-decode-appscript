function main() { 
  var column = SpreadsheetApp.getActiveSheet().getDataRange().getValues();
  
  var sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();
  var x = 5; //setear contando desde el 1 como la columna A, ej: columna "C" entonces x = 3.
  
 for(var n=2;n<column.length;++n){
  
    var cell = sheet.getRange(n,x).getValue();
   
    var str = cell.toString();

   for (var i = 0; i< str.length; ++i){
      var charAt = str.charAt(i);
      var chars = getSpecialCharacter(charAt);
     
      if (chars){
        var result = str.split(charAt).join(chars);
        str = result;
        sheet.getRange(n,x).setValue(str);
      }
    } 
  }
}

function getSpecialCharacter (character) {
  var charss = getArrayOfCharacter();
  for (var specialChar in charss){
      if (character === specialChar){
        return charss[character];
      }
  }
  
}


function getArrayOfCharacter(){
  var characters = {
    "¿": "&iquest;",
    "À": "&Agrave;",
    "Á": "&Aacute;",
    "Â": "&Acirc;",
    "Ã": "&Atilde;",
    "Ä": "&Auml;",
    "Å": "&Aring;",
    "Æ": "&AElig;",
    "Ç": "&Ccedil;",
    "È": "&Egrave;",
    "É": "&Eacute;",
    "Ê": "&Ecirc;",
    "Ë": "&Euml;",
    "Ì": "&Igrave;",
    "Í": "&Iacute;",
    "Î": "&Icirc;",
    "Ï": "&Iuml;",
    "Ð": "&ETH;",
    "Ñ": "&Ntilde;",
    "Ò": "&Ograve;",
    "Ó": "&Oacute;",
    "Ô": "&Ocirc;",
    "Õ": "&Otilde;",
    "Ö": "&Ouml;",
    "×": "&times;",
    "Ø": "&Oslash;",
    "Ù": "&Ugrave;",
    "Ú": "&Uacute;",
    "Û": "&Ucirc;",
    "Ü": "&Uuml;",
    "Ý": "&Yacute;",
    "Þ": "&THORN;",
    "ß": "&szlig;",
    "à": "&agrave;",
    "á": "&aacute;",
    "â": "&acirc;",
    "ã": "&atilde;",
    "ä": "&auml;",
    "å": "&aring;",
    "æ": "&aelig;",
    "ç": "&ccedil;",
    "è": "&egrave;",
    "é": "&eacute;",
    "ê": "&ecirc;",
    "ë": "&euml;",
    "ì": "&igrave;",
    "í": "&iacute;",
    "î": "&icirc;",
    "ï": "&iuml;",
    "ð": "&eth;",
    "ñ": "&ntilde;",
    "ò": "&ograve;",
    "ó": "&oacute;",
    "ô": "&ocirc;",
    "õ": "&otilde;",
    "ö": "&ouml;",
    "÷": "&divide;",
    "ø": "&oslash;",
    "ù": "&ugrave;",
    "ú": "&uacute;",
    "û": "&ucirc;",
    "ü": "&uuml;",
    "ý": "&yacute;",
    "þ": "&thorn;",
    "ÿ": "&yuml;",
    "Ā": "&Amacr;",
    "ā": "&amacr;",
    "Ă": "&Abreve;",
    "ă": "&abreve;",
    "Ą": "&Aogon;",
    "ą": "&aogon;",
    "Ć": "&Cacute;",
    "ć": "&cacute;",
    "Ĉ": "&Ccirc;",
    "ĉ": "&ccirc;",
    "Ċ": "&Cdot;",
    "ċ": "&cdot;",
    "Č": "&Ccaron;",
    "č": "&ccaron;",
    "Ď": "&Dcaron;",
    "ď": "&dcaron;",
    "Đ": "&Dstrok;",
    "đ": "&dstrok;",
    "Ē": "&Emacr;",
    "ē": "&emacr;",
    "Ė": "&Edot;",
    "ė": "&edot;",
    "Ę": "&Eogon;",
    "ę": "&eogon;",
    "Ě": "&Ecaron;",
    "ě": "&ecaron;",
    "Ĝ": "&Gcirc;",
    "ĝ": "&gcirc;",
    "Ğ": "&Gbreve;",
    "ğ": "&gbreve;",
    "Ġ": "&Gdot;",
    "ġ": "&gdot;",
    "Ģ": "&Gcedil;",
    "Ĥ": "&Hcirc;",
    "ĥ": "&hcirc;",
    "Ħ": "&Hstrok;",
    "ħ": "&hstrok;",
    "Ĩ": "&Itilde;",
    "ĩ": "&itilde;",
    "Ī": "&Imacr;",
    "ī": "&imacr;",
    "Į": "&Iogon;",
    "į": "&iogon;",
    "İ": "&Idot;",
    "ı": "&imath;",
    "Ĳ": "&IJlig;",
    "ĳ": "&ijlig;",
    "Ĵ": "&Jcirc;",
    "ĵ": "&jcirc;",
    "Ķ": "&Kcedil;",
    "ķ": "&kcedil;",
    "ĸ": "&kgreen;",
    "Ĺ": "&Lacute;",
    "ĺ": "&lacute;",
    "Ļ": "&Lcedil;",
    "ļ": "&lcedil;",
    "Ľ": "&Lcaron;",
    "ľ": "&lcaron;",
    "Ŀ": "&Lmidot;",
    "ŀ": "&lmidot;",
    "Ł": "&Lstrok;",
    "ł": "&lstrok;",
    "Ń": "&Nacute;",
    "ń": "&nacute;",
    "Ņ": "&Ncedil;",
    "ņ": "&ncedil;",
    "Ň": "&Ncaron;",
    "ň": "&ncaron;",
    "ŉ": "&napos;",
    "Ŋ": "&ENG;",
    "ŋ": "&eng;",
    "Ō": "&Omacr;",
    "ō": "&omacr;",
    "Ő": "&Odblac;",
    "ő": "&odblac;",
    "Œ": "&OElig;",
    "œ": "&oelig;",
    "Ŕ": "&Racute;",
    "ŕ": "&racute;",
    "Ŗ": "&Rcedil;",
    "ŗ": "&rcedil;",
    "Ř": "&Rcaron;",
    "ř": "&rcaron;",
    "Ś": "&Sacute;",
    "ś": "&sacute;",
    "Ŝ": "&Scirc;",
    "ŝ": "&scirc;",
    "Ş": "&Scedil;",
    "ş": "&scedil;",
    "Š": "&Scaron;",
    "š": "&scaron;",
    "Ţ": "&Tcedil;",
    "ţ": "&tcedil;",
    "Ť": "&Tcaron;",
    "ť": "&tcaron;",
    "Ŧ": "&Tstrok;",
    "ŧ": "&tstrok;",
    "Ũ": "&Utilde;",
    "ũ": "&utilde;",
    "Ū": "&Umacr;",
    "ū": "&umacr;",
    "Ŭ": "&Ubreve;",
    "ŭ": "&ubreve;",
    "Ů": "&Uring;",
    "ů": "&uring;",
    "Ű": "&Udblac;",
    "ű": "&udblac;",
    "Ų": "&Uogon;",
    "ų": "&uogon;",
    "Ŵ": "&Wcirc;",
    "ŵ": "&wcirc;",
    "Ŷ": "&Ycirc;",
    "ŷ": "&ycirc;",
    "Ÿ": "&Yuml;",
    "Ź": "&Zacute;",
    "ź": "&zacute;",
    "Ż": "&Zdot;",
    "ż": "&zdot;",
    "Ž": "&Zcaron;",
    "ž": "&zcaron;",
    "ƒ": "&fnof;",
    "Ƶ": "&imped;"
    }
  
  return characters;
}

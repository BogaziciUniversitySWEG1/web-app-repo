 
(function () {
    var GUI_HELPER = {
     
        //ALERT TİPLERİ
        ERROR: 'error',
        INFO: 'info',
        QUESTION: 'question',
        WARNING: 'warning',
        //MessageShow showtype TİPLERİ
        SHOW: 'show',
        SLIDE: 'slide',
        FADE: 'fade',
        /*Alert penceresi açar...Parameteleri:
        1-) title-->string değeri alır(pencere üzerinde görünecek metni belirler)
        2-) msg-->string değeri alır(uayrı,hata yada bilgi mesajı metnini belirler)
        3-) type-->üstteki ALERT TİPLERİ enumlarını alır..(type --> mesaggeboxtaki resmi belirler)
        */
        ALERT: function (title, hata, type) {
            if (type == null) {
                type = GUI_HELPER.INFO;
            }
            $.messager.alert(title, hata, type);
            if (type == GUI_HELPER.ERROR && GUI_HELPER.NOU(hata)) {

                var _number = "";
                if (GUI_HELPER.NOU(hata.number)) {
                    _number = hata.number.toString();
                }

                var _name = "";
                if (GUI_HELPER.NOU(hata.name)) {
                    _name = hata.name.toString();
                }

                var _description = "";
                if (GUI_HELPER.NOU(hata.description)) {
                    _description = hata.description.toString();
                }

                var _message = "";
                if (GUI_HELPER.NOU(hata.message)) {
                    _message = hata.message.toString();
                }
            }
        },
        //SP_BANK ALERT'leri için standart ALERTERR function
        ALERTERR: function (msg, type) {
            if (msg == null) {
                msg = "HATA";
            }

            if (type == null) {
                type = GUI_HELPER.ERROR;
            }

            $.messager.alert('HATA', msg, type);
        },
        /*Confirm(Ok, Cancel) penceresi açar...Parameteleri:
        1-) title-->string değeri alır(pencere üzerinde görünecek metni belirler)
        2-) msg-->string değeri alır(Confirm mesaj metnini belirler)
        3-) callback-->function ismini alır(Ok tıklandıktan sonra gidilecek funciton'ı belirler... Not:string değil direk adı alır)
        */
        CONFIRM: function (title, msg, callback) {
            $.messager.confirm(title, msg, function (r) {
                if (r) {
                    callback();
                }

            });
        },
        /*Mesaj penceresi açar...Parameteleri:
        1-) title-->string değeri alır(pencere üzerinde görünecek metni belirler)
        2-) msg-->string değeri alır(mesaj metnini belirler)
        3-) showtype-->MessageShow showtype TİPLERİ enumlarını alır(bu tipe göre mesaj alttan, yandan yada direk görünür)
        4-) timeout-->sayı değeri alır(açılan mesajın ekranda kaç sn kalacağını belirler)
        */
        SHOWMESSAGE: function (title, msg, showtype, timeout) {

            if (showtype == null) {
                showtype = GUI_HELPER.SHOW;
            }

            if (timeout == null) {
                timeout = 4000;
            }

            $.messager.show({
                title: title,
                msg: msg,
                showType: showtype,
                timeout: timeout
            });
        },
        /*Normal Pencere Açar...Parametreleri:
        1-) title-->string değeri alır(pencere üzerinde görünecek metni belirler)
        2-) divid-->string değeri alır(açılacak divin id'si verilir)
        3-) modal-->bool değeri alır(açılan pencerenn modal mı olup olmamasını belirler. modal olursa kullanıcı pencere açıkken arka tarafa müdahele edemez.)
        4-) drag-->bool değeri alır(pencerenin sürüklenebilir oldup olmadığını belirler)
        5-) diğer özellikleri kullanmak için aşağıdaki kaynak koddan gerekli değerleri değiştirebilirsiniz.
        */
        OPENWINDOW: function (divid, title, modal, drag, maxable) {

            if (drag == null)
                drag = true;

            if (modal == null)
                modal = true;

            if (maxable == null)
                maxable = false;

            $('#' + divid).window({
                title: title,
                modal: modal,
                shadow: true,
                closed: false,
                minimizable: false,
                maximizable: maxable,
                draggable: drag,
                resizable: false,
                collapsible: false
            });
        },
        /*Açık pencereyi kapatır...Parametreleri:
        1-)divid-->string değeri alır(kapatılacak divin id'si verilir)
        */
        CLOSEWINDOW: function (divid) {
            $('#' + divid).window('close');
        },
        SERVICE_CALLBACK_ERR: function (_data, _call) {
            if (_data <= 0) {
                GUI_HELPER.ALERT(_call, 'ERRCODE: ' + _data.toString(), GUI_HELPER.ERROR);
            }
            else if (_data[0] != null && typeof _data[0].ErrorCode != 'undefined') {
                GUI_HELPER.ALERT(_call, _data[0].ErrorMessageStr, GUI_HELPER.ERROR);
            }
            else {
                GUI_HELPER.ALERT(_call, 'ERROR AT: ' + _call, GUI_HELPER.ERROR);
            }
        },

        SLEEP: function (milliSeconds) {
            var startTime = new Date().getTime();
            while (new Date().getTime() < startTime + milliSeconds);
        },
        VALIDATE_CONTROL: function (_str) {
            if (_str.match(/[\<\>!'"#\$%^&\*,]+/i))
                return true;
            else
                return false;
        }, 
        EscapeSpecialCharALL: function (_value) {
            var newvalue = GUI_HELPER.EscapeSpecialCharBackSlash(_value);
            newvalue = GUI_HELPER.EscapeSpecialCharsByForLoop(newvalue, "\'", "\\'");
            newvalue = GUI_HELPER.EscapeSpecialChars(newvalue);
            return newvalue;
        },
        EscapeSpecialCharBackSlash: function (_data) {
            while (_data.indexOf("\\") > 0) {
                _data = _data.replace("\\", "/");
            }
            return _data;
        },
        EscapeSpecialCharsByForLoop: function (_data, _char, _newChar) {
            var myCount = [];
            for (var m = 0; m <= _data.length; m++) {
                if (_data.substring(m, m + 1) == _char) {
                    myCount.push(m);
                }
            }

            var count = 0;
            for (var i = 0; i < myCount.length; i++) {
                _data = _data.substring(0, myCount[i] + count) + _newChar + _data.substring(myCount[i] + count + _newChar.length - 1);
                count += _newChar.length - 1;
            }
            return _data;
        },
        EscapeSpecialChars: function (_data) {
            while (_data.indexOf("&#x0D;") > 0) {
                _data = _data.replace("&#x0D;", "");
            }
            while (_data.indexOf("\n") > 0) {
                _data = _data.replace("\n", "\\n");
            }
            while (_data.indexOf("\r") > 0) {
                _data = _data.replace("\r", "\\r");
            }

            //            while (_data.indexOf("'") > 0) {
            //                _data = _data.replace("'", "&#8217;");
            //            }
            while (_data.indexOf("\t") > 0) {
                _data = _data.replace("\t", "\\t");
            }
            while (_data.indexOf("\b") > 0) {
                _data = _data.replace("\b", "\\b");
            }
            while (_data.indexOf("\f") > 0) {
                _data = _data.replace("\f", "\\f");
            }
            //            while (_data.indexOf("\v") > 0) {
            //                _data = _data.replace("\v","\\v");
            //            } 

            //            while (_data.indexOf('"') > 0) {
            //                _data = _data.replace('"','\"');
            //            }            
            return _data;
            /*
            \b  Backspace (ascii code 08)
            \f  Form feed (ascii code 0C)
            \n  New line
            \r  Carriage return
            \t  Tab
            \v  Vertical tab
            \'  Apostrophe or single quote
            \"  Double quote
            \\  Backslash caracter
            */
        },
        EscapeSpecialCharForSP_BANK: function (arguments) {
            for (var i = 0; i < arguments.length - 2; i++) {
                if ((typeof arguments[i] == 'string') && isNaN(arguments[i])) {
                    arguments[i] = GUI_HELPER.EscapeSpecialCharALL(arguments[i]);
                }
            }
        },
        NOU: function (_item) {
            //NULL OR UNDEFINED KONTROLU YAPAR.
            try {
                if (_item != null && _item != undefined) {
                    return true;
                }
                else {
                    return false;
                }
            }
            catch (err) {
                GUI_HELPER.ALERT(2, "NOU!", err); 
            }

        }, 
        CLEAR_TBODY: function (id) {
            try {
                var _tbodyOld = document.getElementById(id);
                var _tbody = document.createElement('tbody');
                _tbodyOld.parentNode.replaceChild(_tbody, _tbodyOld);
                _tbody.setAttribute('id', id);
                return _tbody;
            } catch (err) {
                GUI_HELPER.ALERT("CLEAR_TBODY!",err , 'error');
            }
        },
        CLEAR_TBODY_NORETURN: function (id) {
            try {
                var _tbodyOld = document.getElementById(id);
                var _tbody = document.createElement('tbody');
                _tbodyOld.parentNode.replaceChild(_tbody, _tbodyOld);
                _tbody.setAttribute('id', id);
            } catch (err) {
                GUI_HELPER.ALERT(  "CLEAR_TBODY_NORETURN!", err, 'error');
            }

        },
        CLEAR_TABLE_NORETURN: function (id) {
            try {
                var _tableOld = document.getElementById(id);
                var _table = document.createElement('TABLE');
                _tableOld.parentNode.replaceChild(_table, _tableOld);
                _table.setAttribute('id', id);

            } catch (err) {
                GUI_HELPER.ALERT( "CLEAR_TABLE_NORETURN!", err, 'error');
            }
        },
        CLEARDROPDOWN: function (_obj) {
            try {
                var select = document.getElementById(_obj);
                var options = select.getElementsByTagName("option");
                for (var i = 0; i < options.length; i++) {
                    select.removeChild(options[i]);
                }
            } catch (err) {
                GUI_HELPER.ALERT( "CLEARDROPDOWN!", err, 'error');
            }
        },
        IndexOfOneDimArr: function (_Array, _Item) {
            try {
                var length = _Array.length;
                var index = -1;
                if (length > 0) {
                    for (var i = 0; i < length; i++) {
                        if (_Array[i] == _Item) {
                            index = i;
                            break;
                        }
                    }
                    return index;
                }
                else {
                    return index;
                }

            }
            catch (err) {
                GUI_HELPER.ALERT("IndexOfOneDimArr!",err , 'error');
            }
        },
        IndexOfTwoDimArr: function (_Array, _Item) { // two dimensional array için
            try {
                var length = _Array.length;
                var index = -1;
                if (length > 0) {
                    for (var i = 0; i < length; i++) {
                        if (_Array[i][0] == _Item) {
                            index = i;
                            break;
                        }
                    }
                    return index;
                }
                else {
                    return index;
                }

            }
            catch (err) {
                GUI_HELPER.ALERT("IndexOfTwoDimArr!", err, 'error');
            }
        },
        IndexOfStr: function (myString, word) {
            try {

                var len = myString.length;
                var wordLen = word.length;
                var num = 0;
                var index = -1;
                var chr = "";
                for (var i = 0; i < len; i++) {
                    if (myString[i] == word[0]) {
                        for (var j = 1; j < wordLen; j++) {
                            if (i + j <= len && myString[i + j] == word[j]) {
                                num = num + 1;
                            }
                        }
                    }
                    if ((num + 1) == wordLen) {
                        index = i;
                        num = 0;
                    }

                }
                return index;
            }
            catch (err) {
                GUI_HELPER.ALERT("IndexOfStr!", err, 'error'); 
            }
        },
        IndexOfStr_I: function (myString, word) {
            try {

                var len = myString.length;
                var wordLen = word.length;
                var num = 0;
                var index = -1;
                var chr = "";
                for (var i = 0; i < len; i++) {
                    if (myString[i] == word[0]) {
                        for (var j = 0; j < wordLen; j++) {
                            if (i + j <= len && myString[i + j] == word[j]) {
                                num = num + 1;
                            }
                        }
                    }
                    if ((num + 1) == wordLen) {
                        index = i;
                        num = 0;
                    }

                }
                return index;
            }
            catch (err) {
                GUI_HELPER.ALERT("IndexOfStr_I!", err, 'error'); 
            }
        },
         TRIMOFTEXT: function (itemtext) {
            var text = itemtext.replace(/(?:(?:^|\n)\s+|\s+(?:$|\n))/g, '').replace(/\s+/g, ' ');
            if (text.length > 0) {
                return true;
            }
            else {
                return false;
            }
        },
        validateEmail: function (_email) {
            if (GUI_HELPER.TRIMOFTEXT(_email)) {
                var email = _email.replace(/(?:(?:^|\n)\s+|\s+(?:$|\n))/g, '').replace(/\s+/g, '');
                var mailArr = new Array();
                var ismail = true;
                var re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
                if (email.indexOf(';') > -1) {
                    mailArr = email.split(";");
                    for (var i = 0; i < mailArr.length; i++) {
                        if (GUI_HELPER.TRIMOFTEXT(mailArr[i]) && !re.test(mailArr[i])) {
                            ismail = false;
                            break
                        }
                    }
                }
                else {
                    ismail = re.test(email);
                }

                return ismail;
            }
            else {
                return false;
            }
        },
        GetDayName: function(dayNumber){
            var days = ['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'];
            return days[dayNumber];
        },
        GetMonthName: function(monthNumber){
            var months = ['January','February','March','April','May','June','July','August','September','October','November','December'];
            return months[monthNumber];
        }
    }
    if (!window.GUI_HELPER) { window.GUI_HELPER = GUI_HELPER; }
})();
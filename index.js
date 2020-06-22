const txtInp = document.getElementById("txtInp");
const keyInp = document.getElementById("keyInp");
const btn = document.getElementById("btn");
const txtOut = document.getElementById("txtOut");

btn.onclick = function ()
{
    let encTxt = CryptoJS.AES.encrypt(txtInp.value, keyInp.value).toString();

    txtOut.textContent = encTxt;
}

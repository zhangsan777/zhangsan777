import AzPopup from "./src/AzPopup"

AzPopup.install = function (Vue,opts) {
  Vue.component(AzPopup.name,AzPopup)
}

export default AzPopup

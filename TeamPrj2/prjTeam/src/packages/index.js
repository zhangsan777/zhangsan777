import button from "./button"
import form from "./form"
import popup from "./popup"
import search from "./search"
import skin from "./skin"

const AzoneUI = {}

AzoneUI.install = function (Vue,opts) {
  Vue.component(button.name,button)
  Vue.component(form.name,form)
  Vue.component(popup.name,popup)
  Vue.component(search.name,search)
  Vue.component(skin.name,skin)

}


export default AzoneUI

import Vue from 'vue'
import lang from 'element-ui/lib/locale/lang/en'
import locale from 'element-ui/lib/locale'
import { 
    Button, 
    Container, 
    Main, 
    Row, 
    Col, 
    Card,
    Table,
    TableColumn,
    Checkbox,
    Input,
    Form,
    FormItem,
} from 'element-ui'

locale.use(lang)

Vue.use(Button)
Vue.use(Container)
Vue.use(Main)
Vue.use(Row)
Vue.use(Col)
Vue.use(Card)
Vue.use(Table)
Vue.use(TableColumn)
Vue.use(Checkbox)
Vue.use(Input)
Vue.use(Form)
Vue.use(FormItem)
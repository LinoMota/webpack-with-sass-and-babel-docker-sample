import { test } from './js/module';
import './styles/main.scss'

document.querySelector('body').addEventListener('click', () => {
    alert(test())
})
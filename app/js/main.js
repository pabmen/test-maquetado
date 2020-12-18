/**
 * Main
 * @author Pablo Mendoza
 */

import {
    DEBUG,
    HTML, LANG,
} from './config/constants'

import { SaleView } from './managers/sale'

new SaleView(document.querySelector('#view-sale'))
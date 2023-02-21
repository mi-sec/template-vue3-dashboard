/**
 * plugins/vuetify.js
 *
 * Framework documentation: https://vuetifyjs.com`
 */

// Styles
import '@mdi/font/css/materialdesignicons.css';
import 'vuetify/styles';

// Composables
import { createVuetify } from 'vuetify';

// https://vuetifyjs.com/en/introduction/why-vuetify/#feature-guides
export default createVuetify( {
    theme: {
        themes: {
            light: {
                colors: {
                    primary: '#1867C0',
                    secondary: '#5CBBF6',
                    // primary: '#3498db',
                    // secondary: '#34495e',
                    success: '#2ecc71',
                    danger: '#e74c3c',
                    warning: '#f1c40f',
                    'warning-dark': '#ffa21a',
                    info: '#00d3ee',
                    light: '#ecf0f1',
                    dark: '#2c3e50',
                    tertiary: '#495057',
                    accent: '#95a5a6',
                    error: '#c0392b'
                }
            }
        }
    }
} );

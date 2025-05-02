<?php
/**
 * Plugin Name: Simulador PrecNet
 * Plugin URI: https://github.com/lucassdantas/precatory_rentability_simulator
 * Description: Simulador interativo de cotas com imposto de renda, usando o shortcode [simulador_precnet].
 * Version: 1.0
 * Author: RD Exclusive
 */

 if (!defined('ABSPATH')) exit;

add_shortcode('simulador_precnet', 'simulador_precnet_shortcode');

function simulador_precnet_shortcode() {
    require_once plugin_dir_path(__FILE__) . 'html.php';
}

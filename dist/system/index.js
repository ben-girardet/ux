System.register(["aurelia-framework", "./aurelia-ux", "./colors/swatches", "./colors/shadows", "./button/ux-button-theme", "./input/ux-input-theme", "./input-info/ux-input-info-theme", "./textarea/ux-textarea-theme", "./form/ux-form-theme", "./form/ux-field-theme", "./chip-input/ux-chip-input-theme", "./chip-input/ux-tag-theme", "./chip-input/ux-chip-theme", "./checkbox/ux-checkbox-theme", "./styles/decorators", "./ux-configuration"], function (exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    function configure(config, callback) {
        config.globalResources([
            aurelia_framework_1.PLATFORM.moduleName('./button/ux-button'),
            aurelia_framework_1.PLATFORM.moduleName('./input/ux-input'),
            aurelia_framework_1.PLATFORM.moduleName('./input-info/ux-input-info'),
            aurelia_framework_1.PLATFORM.moduleName('./textarea/ux-textarea'),
            aurelia_framework_1.PLATFORM.moduleName('./form/ux-form'),
            aurelia_framework_1.PLATFORM.moduleName('./form/ux-field'),
            aurelia_framework_1.PLATFORM.moduleName('./form/ux-submit-attribute'),
            aurelia_framework_1.PLATFORM.moduleName('./chip-input/ux-chip-input'),
            aurelia_framework_1.PLATFORM.moduleName('./chip-input/ux-chip'),
            aurelia_framework_1.PLATFORM.moduleName('./chip-input/ux-tag'),
            aurelia_framework_1.PLATFORM.moduleName('./checkbox/ux-checkbox')
        ]);
        var ux = config.container.get(aurelia_ux_1.AureliaUX);
        if (typeof callback === 'function') {
            return Promise.resolve(callback(ux))
                .then(function () { return ux.start(config); });
        }
        else {
            ux.use.defaultConfiguration();
            return ux.start(config);
        }
    }
    exports_1("configure", configure);
    var aurelia_framework_1, aurelia_ux_1;
    var exportedNames_1 = {
        "configure": true,
        "swatches": true,
        "shadows": true,
        "UxButtonTheme": true,
        "UxInputTheme": true,
        "UxInputInfoTheme": true,
        "UxTextareaTheme": true,
        "UxFormTheme": true,
        "UxFieldTheme": true,
        "UxChipInputTheme": true,
        "UxTagTheme": true,
        "UxChipTheme": true,
        "UxCheckboxTheme": true,
        "AureliaUX": true,
        "UXConfiguration": true
    };
    function exportStar_1(m) {
        var exports = {};
        for (var n in m) {
            if (n !== "default" && !exportedNames_1.hasOwnProperty(n)) exports[n] = m[n];
        }
        exports_1(exports);
    }
    return {
        setters: [
            function (aurelia_framework_1_1) {
                aurelia_framework_1 = aurelia_framework_1_1;
            },
            function (aurelia_ux_1_1) {
                aurelia_ux_1 = aurelia_ux_1_1;
                exports_1({
                    "AureliaUX": aurelia_ux_1_1["AureliaUX"]
                });
            },
            function (swatches_1_1) {
                exports_1({
                    "swatches": swatches_1_1["swatches"]
                });
            },
            function (shadows_1_1) {
                exports_1({
                    "shadows": shadows_1_1["shadows"]
                });
            },
            function (ux_button_theme_1_1) {
                exports_1({
                    "UxButtonTheme": ux_button_theme_1_1["UxButtonTheme"]
                });
            },
            function (ux_input_theme_1_1) {
                exports_1({
                    "UxInputTheme": ux_input_theme_1_1["UxInputTheme"]
                });
            },
            function (ux_input_info_theme_1_1) {
                exports_1({
                    "UxInputInfoTheme": ux_input_info_theme_1_1["UxInputInfoTheme"]
                });
            },
            function (ux_textarea_theme_1_1) {
                exports_1({
                    "UxTextareaTheme": ux_textarea_theme_1_1["UxTextareaTheme"]
                });
            },
            function (ux_form_theme_1_1) {
                exports_1({
                    "UxFormTheme": ux_form_theme_1_1["UxFormTheme"]
                });
            },
            function (ux_field_theme_1_1) {
                exports_1({
                    "UxFieldTheme": ux_field_theme_1_1["UxFieldTheme"]
                });
            },
            function (ux_chip_input_theme_1_1) {
                exports_1({
                    "UxChipInputTheme": ux_chip_input_theme_1_1["UxChipInputTheme"]
                });
            },
            function (ux_tag_theme_1_1) {
                exports_1({
                    "UxTagTheme": ux_tag_theme_1_1["UxTagTheme"]
                });
            },
            function (ux_chip_theme_1_1) {
                exports_1({
                    "UxChipTheme": ux_chip_theme_1_1["UxChipTheme"]
                });
            },
            function (ux_checkbox_theme_1_1) {
                exports_1({
                    "UxCheckboxTheme": ux_checkbox_theme_1_1["UxCheckboxTheme"]
                });
            },
            function (decorators_1_1) {
                exportStar_1(decorators_1_1);
            },
            function (ux_configuration_1_1) {
                exports_1({
                    "UXConfiguration": ux_configuration_1_1["UXConfiguration"]
                });
            }
        ],
        execute: function () {
        }
    };
});

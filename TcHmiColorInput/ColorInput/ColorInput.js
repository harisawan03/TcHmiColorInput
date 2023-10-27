// Keep these lines for a best effort IntelliSense of Visual Studio 2017 and higher.
/// <reference path="./../../Packages/Beckhoff.TwinCAT.HMI.Framework.12.760.48/runtimes/native1.12-tchmi/TcHmi.d.ts" />

/*
 * Generated 10/26/2023 11:03:16 AM
 * Copyright (C) 2023
 */
var TcHmi;
(function (/** @type {globalThis.TcHmi} */ TcHmi) {
    let Controls;
    (function (/** @type {globalThis.TcHmi.Controls} */ Controls) {
        let TcHmiColorInput;
        (function (TcHmiColorInput) {
            class ColorInput extends TcHmi.Controls.Beckhoff.TcHmiInput {

                /*
                Attribute philosophy
                --------------------
                - Local variables are not set in the class definition, so they have the value 'undefined'.
                - During compilation, the Framework sets the value that is specified in the HTML or in the theme (possibly 'null') via normal setters.
                - Because of the "changed detection" in the setter, the value is only processed once during compilation.
                - Attention: If we have a Server Binding on an Attribute, the setter will be called once with null to initialize and later with the correct value.
                */

                /**
                 * Constructor of the control
                 * @param {JQuery} element Element from HTML (internal, do not use)
                 * @param {JQuery} pcElement precompiled Element (internal, do not use)
                 * @param {TcHmi.Controls.ControlAttributeList} attrs Attributes defined in HTML in a special format (internal, do not use)
                 * @returns {void}
                 */
                constructor(element, pcElement, attrs) {
                    /** Call base class constructor */
                    super(element, pcElement, attrs);
                    this.__color = {}; // should always be an Object
;
                }

                /**
                 * Raised after the control was added to the control cache and the constructors of all base classes were called.
                 */
                __previnit() {
                    // Fetch template root element
                    this.__elementTemplateRoot = this.__element.find('.TcHmi_Controls_TcHmiColorInput_ColorInput-Template');
                    if (this.__elementTemplateRoot.length === 0) {
                        throw new Error('Invalid Template.html');
                    }

                    this.__colorInp = this.__elementTemplateRoot.find('.TcHmi_Controls_Beckhoff_TcHmiColorInput-template-colorinput');

                    // Call __previnit of base class
                    super.__previnit();
                }
                /**
                 * Is called during control initialization after the attribute setters have been called. 
                 * @returns {void}
                 */
                __init() {
                    super.__init();
                }
                /**
                 * Is called by the system after the control instance is inserted into the active DOM.
                 * Is only allowed to be called from the framework itself!
                 */
                __attach() {
                    super.__attach();
                    /**
                     * Initialize everything which is only available while the control is part of the active dom.
                     */

                    this.__onUserInteractionFinishedEvent = TcHmi.EventProvider.register(this.__id + '.onUserInteractionFinished', this.__onUserInteractionFinished())
                }
                /**
                 * Is called by the system when the control instance is no longer part of the active DOM.
                 * Is only allowed to be called from the framework itself!
                 */
                __detach() {
                    super.__detach();

                    /**
                     * Disable everything that is not needed while the control is not part of the active DOM.
                     * For example, there is usually no need to listen for events!
                     */

                    this.__onUserInteractionFinishedEvent = null;
                }
                /**
                 * Destroy the current control instance.
                 * Will be called automatically if the framework destroys the control instance!
                 */
                destroy() {
                    /**
                     * Ignore while __keepAlive is set to true.
                     */
                    if (this.__keepAlive) {
                        return;
                    }
                    super.destroy();
                    /**
                     * Free resources like child controls etc.
                     */
                }

                __onUserInteractionFinished() {
                    return (evt) => {
                        this.setColor(this.__colorInp.val());
                    }
                }


                /**** hiding these properties so defining empty setter/getter ****/

                setBackgroundColor() {
                    return;
                }

                getBackgroundColor() {
                    return;
                }

                setTextColor() {
                    return;
                }

                getTextColor() {
                    return;
                }

                /*****************************************************************/


                // do not write to this.__color anywhere but setColor()
                setColor(colorNew) {

                    // color value comes as string from input, convert to Color Object
                    if (typeof colorNew === 'string') {
                        colorNew = { color: colorNew };
                    }
                    
                    if (colorNew === null) {
                        colorNew = this.getAttributeDefaultValueInternal('Color');
                    }

                    if (tchmi_equal(colorNew, this.__color)) {
                        return;
                    }

                    this.__color = colorNew;

                    TcHmi.EventProvider.raise(this.__id + '.onPropertyChanged', { propertyName: 'Color' });
                    TcHmi.EventProvider.raise(this.__id + ".onColorChanged", this.__color)

                    this.__processColor();

                }

                getColor() {
                    return this.__color;
                }

                __processColor() {
                    let color = this.__color;
                    this.__colorInp.prop('value', this.__convertRgbaToHex(color));
                }

                __convertRgbaToHex(colorVal) {

                    let color = colorVal['color'];
                    
                    // color input val needs to be hex, if rgba convert to hex
                    if (color.includes('rgba')) {
                        color = color.replace('rgba(', '');
                        color = color.replace(')', '');

                        let colorVals = color.split(',');
                        colorVals.forEach(function (c, index) {
                            colorVals[index] = parseInt(c.trim(), 10);
                        });

                        let r = colorVals[0].toString(16);
                        r = r.length == 1 ? '0' + r : r;

                        let g = colorVals[1].toString(16);
                        g = g.length == 1 ? '0' + g : g;

                        let b = colorVals[2].toString(16);
                        b = b.length == 1 ? '0' + b : b;

                        color = '#' + r + g + b;

                    }

                    return color;

                }

            }
            TcHmiColorInput.ColorInput = ColorInput;
        })(TcHmiColorInput = Controls.TcHmiColorInput || (Controls.TcHmiColorInput = {}));
    })(Controls = TcHmi.Controls || (TcHmi.Controls = {}));
})(TcHmi || (TcHmi = {}));

/**
 * Register Control
 */
TcHmi.Controls.registerEx('ColorInput', 'TcHmi.Controls.TcHmiColorInput', TcHmi.Controls.TcHmiColorInput.ColorInput);

(function() {
    let template = `
        <style>

        </style>
        <div class="container">

        </div>
    `;
    class DateWidget extends HTMLElement {

        // Fires when an instance of the element is created.
        createdCallback() {
            this.createShadowRoot().innerHTML = template;
        };
        // Fires when an instance was inserted into the document.
        attachedCallback() {

        };
        // Fires when an attribute was added, removed, or updated.
        attributeChangedCallback(attrName, oldVal, newVal) {
          console.log(attrName);
        };
    }
    document.registerElement('date-widget', DateWidget);
})();
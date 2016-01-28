(function() {
    let template = `
        <style>

        </style>
        <div class="container">
          <content></content>
        </div>
    `;
    class EpicElement extends HTMLElement {
        // Fires when an instance of the element is created.
        createdCallback() {
            this.createShadowRoot().innerHTML = template;
        };
        // Fires when an instance was inserted into the document.
        attachedCallback() {

        };
        // Fires when an attribute was added, removed, or updated.
        attributeChangedCallback(attrName, oldVal, newVal) {
          console.log('attributeChangedCallback');
          console.log('attrName', attrName);
          console.log('oldVal', oldVal);
          console.log('newVal', newVal);
        };
    }
    document.registerElement('epic-element', EpicElement);
})();
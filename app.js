$(document).ready(function() {

  $("#example-getting-started").multiselect();

  $(document).on("change", ".btn-file :file", function() {
    var input = $(this),
      label = input
        .val()
        .replace(/\\/g, "/")
        .replace(/.*\//, "");
    input.trigger("fileselect", [label]);
  });

  $('input[type="radio"]').click(function(){
    var $radio = $(this);
    var $allRadioInputs = $('input[type="radio"]');

    if ($radio.data('waschecked') == true) {
      // If input was pressed twice, disable it
      $radio.prop('checked', false);
      $radio.data('waschecked', false);

      this.parentNode.parentNode.style.border = "1px solid transparent";

    } else {

      // Disable the rest of the inputs
      for (var i = 0; i < $allRadioInputs.length; i++) {
        if (this.name.includes('booth') && $allRadioInputs[i].name.includes('booth') && this.name !== $allRadioInputs[i].name) {
          $($allRadioInputs[i]).prop('checked', false);
          $($allRadioInputs[i]).data('waschecked', false);
        }

        if (this.name.includes('package') && $allRadioInputs[i].name.includes('package') && this.name !== $allRadioInputs[i].name) {
          $($allRadioInputs[i]).prop('checked', false);
          $($allRadioInputs[i]).data('waschecked', false);
          $($allRadioInputs)[i].parentNode.parentNode.style.border = "1px solid transparent";
        }
      }

      // apply style to the pressed input if it was a booth exhibitor package
      if (this.name.includes('package')) {
        this.parentNode.parentNode.style.border = "1px solid red";
      }

      // enable the pressed input
      $radio.data('waschecked', true);

    }
   });

  $(".btn-file :file").on("fileselect", function(event, label) {
    var input = $(this)
        .parents(".input-group")
        .find(":text"),
      log = label;

    if (input.length) {
      input.val(log);
    } else {
      if (log) alert(log);
    }
  });

  function readURL(input) {
    var reader = new FileReader();

    reader.onload = function(e) {
      input.parentNode.parentNode.parentNode.parentNode.lastElementChild.src = e.target.result;
    };

    reader.readAsDataURL(input.files[0]);
  }

  $("input[name='upload-input']").change(function() {
    readURL(this);
  });

  //turn form data into json
  (function() {
    function clearStorage() {
      localStorage.clear();
    }

    function getFormJSON() {
      var FORM_ID = 'test';

      var formValues = {};
      var elements = document.getElementById(FORM_ID).querySelectorAll("input, select, textarea");

      for (var i = 0; i < elements.length; ++i) {
        var element = elements[i];
        var name = element.name;

        if (element.name === 'upload-input') continue; // skip unnecesary input

        formValues[name] = value;

        if (element.name.includes('booth') || element.name.includes('package')) {
          console.log(`${element.name} checked:${element.checked}`);
          formValues[name] = element.checked;
        }

        if (
          element.name.includes('image') ||
          element.name.includes('logo') ||
          element.name.includes('picture') ||
          element.name.includes('video') ||
          element.name.includes('3D')
        ) {
          if (element.name.includes('profile picture')) {
            var img = document.getElementsByClassName('img-upload-profile-picture')[0];
            var value = img.src ? getBase64Image(img) : null;
          }
          if (element.name.includes('company logo')) {
            var img = document.getElementsByClassName('img-upload-company-logo')[0];
            var value = img.src ? getBase64Image(img) : null;
          }
          if (element.name.includes('product_image_1')) {
            var img = document.getElementsByClassName('img-upload-1')[0];
            var value = img.src ? getBase64Image(img) : null;
          }
          if (element.name.includes('product_image_2')) {
            var img = document.getElementsByClassName('img-upload-2')[0];
            var value = img.src ? getBase64Image(img) : null;
          }
          if (element.name.includes('product_image_3')) {
            var img = document.getElementsByClassName('img-upload-3')[0];
            var value = img.src ? getBase64Image(img) : null;
          }
          if (element.name.includes('product_video')) {
            var img = document.getElementsByClassName('video-upload')[0];
            var value = img.src ? getBase64Image(img) : null;
          }
          if (element.name.includes('3D')) {
            var img = document.getElementsByClassName('3d-model-upload')[0];
            var value = img.src ? getBase64Image(img) : null;
          }

          formValues[name] = value;
        }

      }

      return formValues;
    }

    function saveDataInLocalStorage(name, item) {
      localStorage.setItem(name, item);
    }

    function readFormDataFromLocalStorage() {
      return localStorage.getItem('FORM_DATA');
    }

    function removeFromLocalStorage(itemName) {
      localStorage.removeItem(itemName);
    }

    function getBase64Image(img) {
        var canvas = document.createElement("canvas");
        canvas.style.display = 'none';
        canvas.width = img.width;
        canvas.height = img.height;

        var ctx = canvas.getContext("2d");
        ctx.drawImage(img, 0, 0);

        var dataURL = canvas.toDataURL("image/png");

        return dataURL.replace(/^data:image\/(png|jpg);base64,/, "");
    }

    var read = document.getElementById("read");

    var submit = document.getElementById("submit");

    // Form buttons

    submit.addEventListener(
      "click",
      function(e) {
        e.preventDefault();

        var formJSON = getFormJSON();
        var formAsString = JSON.stringify(formJSON);
        saveDataInLocalStorage('FORM_DATA', formAsString);
      },
      false
    );

    read.addEventListener(
      "click",
      function(e) {
        e.preventDefault();
        // retrieve values and images from local storage.
        var _data = readFormDataFromLocalStorage();
        var data = JSON.parse(_data);

        // reading image from local storage and mount it on the dom
        document.getElementsByClassName('img-upload-profile-picture')[0].src = `data:image/png;base64,${data['profile picture']}`;
        document.getElementsByClassName('img-upload-company-logo')[0].src = `data:image/png;base64,${data['company logo']}`;
        document.getElementsByClassName('img-upload-1')[0].src = `data:image/png;base64,${data['product_image_1']}`;
        document.getElementsByClassName('img-upload-2')[0].src = `data:image/png;base64,${data['product_image_2']}`;
        document.getElementsByClassName('img-upload-3')[0].src = `data:image/png;base64,${data['product_image_3']}`;
        document.getElementsByClassName('3d-model-upload')[0].src = `data:image/png;base64,${data['3D model']}`;
        document.getElementsByClassName('video-upload')[0].src = `data:image/png;base64,${data['product_video']}`;

      },
      false
    );
  })();
});

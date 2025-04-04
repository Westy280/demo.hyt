"use strict";

//attribute the option value to the input field, and then reset select value to default
$("select.custom_select").change(function () {
  $(this).next("option").val($(this).children("option:selected").text());
  $(this).val("default");
});

//-------- Useless function, change the bg color--------------
$("select.form-select").change(function () {
  //   if ($("select").val() == "Sephora") {
  //     $("input.form").css("display", "");
  //     return;
  //   } else if ($("select").val() == "Wallmart Visa") {
  //     $("input.forms").css("display", "");
  //     $("input.form").css("display", "");
  //     return;
  //   } else if ($("select").val() != "Sephora") {
  //     $("input.form").css("display", "none");
  //     return;
  //   } else if ($("select").val() != "Wallmart Visa") {
  //     $("input.forms").css("display", "none");
  //     $("input.form").css("display", "none");
  //     return;
  //   }

  if ($("select").val() == "Sephora") {
    document.getElementById("form3").style.display = "block";
  } else {
    document.getElementById("form3").style.display = "none";
  }
  if ($("select").val() == "RazerGold") {
    document.getElementById("form3").style.display = "none";
  }
  if ($("select").val() == "Nordstrom") {
    document.getElementById("form3").style.display = "block";
  }
  if ($("select").val() == "Nike") {
    document.getElementById("form3").style.display = "block";
  }

  if ($("select").val() == "Macy") {
    document.getElementById("form3").style.display = "block";
  }

  if ($("select").val() == "Vanilla") {
    document.getElementById("form2").style.display = "block";
    document.getElementById("form0").style.display = "block";
    document.getElementById("form").style.display = "block";
  } else {
    document.getElementById("form2").style.display = "none";
    document.getElementById("form0").style.display = "none";
    document.getElementById("form").style.display = "none";
  }

  if ($("select").val() == "Wallmart Visa") {
    document.getElementById("form").style.display = "block";
    document.getElementById("form2").style.display = "block";
    document.getElementById("form0").style.display = "block";
  }

  if ($("select").val() == "Visa Silvery White") {
    document.getElementById("form").style.display = "block";
    document.getElementById("form2").style.display = "block";
    document.getElementById("form0").style.display = "block";
  }

  if ($("select").val() == "TT Visa") {
    document.getElementById("form").style.display = "block";
    document.getElementById("form2").style.display = "block";
    document.getElementById("form0").style.display = "block";
  }

  if ($("select").val() == "Amex") {
    document.getElementById("form4").style.display = "block";
    document.getElementById("form2").style.display = "block";
    document.getElementById("form").style.display = "block";
    document.getElementById("form01").style.display = "block";
  } else {
    document.getElementById("form01").style.display = "none";

    document.getElementById("form4").style.display = "none";
    // document.getElementById("form3").style.display = "none";
  }
  if ($("select").val() == "MasterCard") {
    document.getElementById("form2").style.display = "block";
    document.getElementById("form").style.display = "block";
  }

  //   if ($("select").val() == "Nordstrom") {
  //     $("#form").css("display", "");
  //   }
  //   if ($("select").val() != "Nordstrom") {
  //     $("#form").css("display", "none");
  //   }

  //   if ($("select").val() == "Nike") {
  //     $("input.form").css("display", "");
  //   }
  //   if ($("select").val() != "Nike") {
  //     $("input.form").css("display", "none");
  //   }

  //   if ($("select").val() == "MasterCard") {
  //     $("input.form").css("display", "");
  //   }
  //   if ($("select").val() != "MasterCard") {
  //     $("input.form").css("display", "none");
  //   }
  //   if ($("select").val() == "Vanilla") {
  //     $("input.forms").css("display", "");
  //     $("input.form").css("display", "");
  //   }
  //   if ($("select").val() != "Vanilla") {
  //     $("input.forms").css("display", "none");
  //     $("input.form").css("display", "none");
  //   }
  //   if ($("select").val() == "RazerGold") {
  //     $("input.forms").css("display", "");
  //     $("input.form").css("display", "");
  //   }
  //   if ($("select").val() != "RazerGold") {
  //     $("input.forms").css("display", "none");
  //     $("input.form").css("display", "none");
  //   }
  //   if ($("select").val() == "Wallmart Visa") {
  //     $("input.forms").css("display", "");
  //     $("input.form").css("display", "");
  //   }
  //   if ($("select").val() != "Wallmart Visa") {
  //     $("input.forms").css("display", "none");
  //     $("input.form").css("display", "none");
  //   }
  //   if ($("select").val() == "Visa Silvery White") {
  //     $("input.forms").css("display", "");
  //     $("input.form").css("display", "");
  //   }
  //   if ($("select").val() != "Visa Silvery White") {
  //     $("input.forms").css("display", "none");
  //     $("input.form").css("display", "none");
  //   }
  //   if ($("select").val() == "TT Visa") {
  //     $("input.forms").css("display", "");
  //     $("input.form").css("display", "");
  //   }
  //   if ($("select").val() != "TT Visa") {
  //     $("input.forms").css("display", "none");
  //     $("input.form").css("display", "none");
  //   }
  //   if ($("select").val() == "Amex") {
  //     $("input.forms").css("display", "");
  //     $("input.form").css("display", "");
  //     $("input.formss").css("display", "");
  //   }
  //   if ($("select").val() != "Amex") {
  //     $("input.forms").css("display", "none");
  //     $("input.form").css("display", "none");
  //     $("input.formss").css("display", "none");
  //   }
});

$(document).ready(function () {
  /*>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
        AOS Animation Activation
    <<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<*/
  AOS.init();
  window.addEventListener("load", AOS.refresh);
  AOS.init({
    once: true,
  });

  /*>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>      
           Sticky Header
    <<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<*/
  window.onscroll = function () {
    scrollFunction();
  };

  function scrollFunction() {
    if (
      document.body.scrollTop > 50 ||
      document.documentElement.scrollTop > 50
    ) {
      $(".site-header--sticky").addClass("scrolling");
    } else {
      $(".site-header--sticky").removeClass("scrolling");
    }
    if (
      document.body.scrollTop > 700 ||
      document.documentElement.scrollTop > 700
    ) {
      $(".site-header--sticky.scrolling").addClass("reveal-header");
    } else {
      $(".site-header--sticky.scrolling").removeClass("reveal-header");
    }
  }

  /*>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>      
           Smooth Scroll
    <<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<*/

  $(".goto").on("click", function (event) {
    if (this.hash !== "") {
      event.preventDefault();
      var hash = this.hash;
      $("html, body").animate(
        {
          scrollTop: $(hash).offset().top,
        },
        2000,
        function () {
          window.location.hash = hash;
        }
      );
    } // End if
  });

  /*>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>      
          Preloader Activation
    <<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<*/

  $(window).load(function () {
    setTimeout(function () {
      $("#loading").fadeOut(500);
    }, 1000);
    setTimeout(function () {
      $("#loading").remove();
    }, 2000);
  });
});

console.log("Website by Emmett Mathison");
console.log(document.head.outerHTML.split(""));

var href = window.location.href.split("/");
var html_location = href[href.length - 1];

if (window.innerWidth >= 900 && html_location !== "home.html") {
  window.location = "home.html";
}

if (window.innerWidth < 900 && html_location !== "phone.html") {
  window.location = "home.html";
}

window.onresize = function () {
  if (window.innerWidth >= 900) {
    window.location = "home.html";
  } else if (window.innerWidth < 900) {
    window.location = "phone.html";
  }
};

$("#erinWakeland").on("mouseenter", function () {
  $("#erin").show();
});
$("#erinWakeland").on("mouseleave", function () {
  $("#erin").hide();
});
$("#erinWakeland").on("click", function () {
  $("#erin").show();
  $(this).on("mouseleave", function () {
    $("#erin").show();
  });
});

$("#designedThings").on("mouseenter", function () {
  $("#designedThingsImage").show();
});
$("#designedThings").on("mouseleave", function () {
  $("#designedThingsImage").hide();
});
$("#designedThings").on("click", function () {
  $("#designedThings").show();
  $(this).on("mouseleave", function () {
    $("#designedThingsImage").show();
  });
});

$("#oldPage").on("mouseenter", function () {
  $("#oldPageMovie").show();
});
$("#oldPage").on("mouseleave", function () {
  $("#oldPageMovie").hide();
});
$("#oldPage").on("click", function () {
  $("#oldPageMovie").show();
  $(this).on("mouseleave", function () {
    $("#oldPageMovie").show();
  });
});

$("#yarnVideos").on("mouseenter", function () {
  $("#yarnMovie").show();
});
$("#yarnVideos").on("mouseleave", function () {
  $("#yarnMovie").hide();
});
$("#yarnVideos").on("click", function () {
  $("#yarnMovie").show();
  $(this).on("mouseleave", function () {
    $("#yarnMovie").show();
  });
});

$("#paint").on("mouseenter", function () {
  $("#painting").show();
});
$("#paint").on("mouseleave", function () {
  $("#painting").hide();
});
$("#paint").on("click", function () {
  $("#painting").show();
  $(this).on("mouseleave", function () {
    $("#painting").show();
  });
});

$("#write").on("mouseenter", function () {
  $("#everythingYouNeed").show();
});
$("#write").on("mouseleave", function () {
  $("#everythingYouNeed").hide();
});
$("#write").on("click", function () {
  $("#everythingYouNeed").show();
  $(this).on("mouseleave", function () {
    $("#everythingYouNeed").show();
  });
});

$("#photos").on("mouseenter", function () {
  $("#photoFriends").show();
});
$("#photos").on("mouseleave", function () {
  $("#photoFriends").hide();
});
$("#photos").on("click", function () {
  $("#photoFriends").show();
  $(this).on("mouseleave", function () {
    $("#photoFriends").show();
  });
});

$("#elephant").on("mouseenter", function () {
  $("#elephantPhoto").show();
});
$("#elephant").on("mouseleave", function () {
  $("#elephantPhoto").hide();
});
$("#elephant").on("click", function () {
  $("#elephantPhoto").show();
  $(this).on("mouseleave", function () {
    $("#elephantPhoto").show();
  });
});

$("#here").on("mouseenter", function () {
  $("#earth").show();
});
$("#here").on("mouseleave", function () {
  $("#earth").hide();
});
$("#here").on("click", function () {
  $("#earth").show();
  $(this).on("mouseleave", function () {
    $("#earth").show();
  });
});

$("#filmSets").on("mouseenter", function () {
  $("#filmSetPhoto").show();
});
$("#filmSets").on("mouseleave", function () {
  $("#filmSetPhoto").hide();
});
$("#filmSets").on("click", function () {
  $("#filmSetPhoto").show();
  $(this).on("mouseleave", function () {
    $("#filmSetPhoto").show();
  });
});

$("#earthBody").on("mouseenter", function () {
  $("#earthBodyImage").show();
});
$("#earthBody").on("mouseleave", function () {
  $("#earthBodyImage").hide();
});
$("#earthBody").on("click", function () {
  $("#earthBodyImage").show();
  $(this).on("mouseleave", function () {
    $("#earthBodyImage").show();
  });
});

$("#islandSurvival").on("mouseenter", function () {
  $("#islandSurvivalPhoto").show();
});
$("#islandSurvival").on("mouseleave", function () {
  $("#islandSurvivalPhoto").hide();
});
$("#islandSurvival").on("click", function () {
  $("#islandSurvivalPhoto").show();
  $(this).on("mouseleave", function () {
    $("#islandSurvivalPhoto").show();
  });
});

$("#ancientBathtub").on("mouseenter", function () {
  $("#bathtubPhoto").show();
});
$("#ancientBathtub").on("mouseleave", function () {
  $("#bathtubPhoto").hide();
});
$("#ancientBathtub").on("click", function () {
  $("#bathtubPhoto").show();
  $(this).on("mouseleave", function () {
    $("#bathtubPhoto").show();
  });
});

$("#surprise").on("mouseenter", function () {
  $("#postcard").show();
});
$("#surprise").on("mouseleave", function () {
  $("#postcard").hide();
});
$("#surprise").on("click", function () {
  $("#postcard").show();
  $(this).on("mouseleave", function () {
    $("#postcard").show();
  });
});

$("#surpriseBook").on("mouseenter", function () {
  $("#book").show();
});
$("#surpriseBook").on("mouseleave", function () {
  $("#book").hide();
});
$("#surpriseBook").on("click", function () {
  $("#book").show();
  $(this).on("mouseleave", function () {
    $("#book").show();
  });
});

let sky = document.getElementById("sky");

sky.playbackRate = 0.65;

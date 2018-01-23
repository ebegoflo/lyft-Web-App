
  // $(document).ready(loadPage);
  $(document).ready(function(loadPage){
    $("#search").keyup(inputSearh);
  });

    function inputSearh(){
      var search = $("#search").val().toLowerCase();
      if($("#search").val().trim().length > 0){
      }
    };

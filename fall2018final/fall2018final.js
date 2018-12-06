$( "#one.top").click(function() {
    $("#one.list").slideToggle("slow");
  });
  $( "#two.top").click(function() {
    $( "#two.list" ).slideToggle("slow");
  });
  $( "#three.top").click(function() {
    $( "#three.list" ).slideToggle("slow");
  });

  let content ="article1.txt";
  $("article").val(content);
  $("article").load(content);

 $("input").change(function() {
     content =$(this).val();
     $("#content").load(content);
 });
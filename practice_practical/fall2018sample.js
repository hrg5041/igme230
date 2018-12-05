/* Don't use <script> tags in a linked js file! */
$( "#one").click(function() {
    $( "#one.submenu" ).slideToggle( "slow");
  });
  $( "#two").click(function() {
    $( "#two.submenu" ).slideToggle( "slow");
  });

  let header = "content1.txt";
  $("#choose-content").val(header);
  $("#content").load(header);

  $("#choose-content").change(function() {
    header = $(this).val(); // changes dependent on the text file being chosen 
    $("#content").load(header); //loads the specific verse that is selected
});
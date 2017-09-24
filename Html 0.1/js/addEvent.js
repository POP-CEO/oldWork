/*Add Button change icone hide table+input*/
$("#btnadds").click(function(){
$('[data-show-add0=".sh"]').slideToggle(function() {
$("#icon").toggleClass("glyphicon-minus-sign");
})});

$('#btn1').click(function(){
$("#formsearch").toggle(1500);
});
/*This is First Add*/
var i=0;
$('#add0_submit').click(function create(){
var name=$('#name').val();
var Email=$('#Email').val();
var tele=$('#Tele').val();
i++;
$('[data-table-0=".table"]').append(
  '<tr id=d'+i+'>'
  +'<td id=id_row'+i+'>'+i+'</td>'
  +'<td id=name_row'+i+'>'+name+'</td>'
  +'<td id=Email_row'+i+'>'+Email+'</td>'
  +'<td id=tele_row'+i+'>'+tele+'</td>'
  +'<td><input type=button id=edit_button'+i+' value=Edit    onclick=edit_row('+i+')></th>'
  +'<th><input type=button id=save_button'+i+' value=Save    onclick=save_row('+i+')></th>'
  +'<th><input type=button id=delet_btn'+i+'   value=Delete  onclick=delete_row('+i+')></td></tr>'
)
$("#delet_btn"+i).addClass('btn btn-danger');
$("#edit_button"+i).addClass('btn btn-primary');
$("#save_button"+i).addClass('hidden btn btn-success');
})


function edit_row(no)
{
 $("#edit_button"+no).addClass('hidden');
 $("#save_button"+no).removeClass('hidden');

 var name=$("#name_row"+no);
 var Email=$("#Email_row"+no);
 var tele=$("#tele_row"+no);

 var name_data=name.text();
 var Email_data=Email.text();
 var tele_data=tele.text();
 name.html("<input type='text' id='name_text"+no+"' value='"+name_data+"'>");
 Email.html("<input type='text' id='Email_text"+no+"' value='"+Email_data+"'>");
 tele.html("<input type='text' id='tele_text"+no+"' value='"+tele_data+"'>");
}

function save_row(no)
{
 var name_val=$("#name_text"+no).val();
 var Email_val=$("#Email_text"+no).val();
 var tele_val=$("#tele_text"+no).val();


$("#name_row"+no).html(name_val);
 $("#Email_row"+no).html(Email_val);
 $("#tele_row"+no).html(tele_val);
 $("#edit_button"+no).removeClass('hidden');
 $("#save_button"+no).addClass('hidden');
}

function delete_row(no)
{
 $('#d'+no).html('');
}
/*This is First Add*/
$("#btn_add1").click(function(){
$('[data-show-add1=".sh"]').slideToggle(function() {
$("#icon1").removeClass("glyphicon glyphicon-plus-sign").addClass("glyphicon glyphicon-minus-sign");
})});

var x=0;
$('#add1_submit').click(function create(){
var add1_name=$('#add1_name').val();
var add1_Email=$('#add1_Email').val();
var add1_tele=$('#add1_Tele').val();
x++;
$('[data-table-1=".table"]').append(
  '<tr id=d'+x+'>'
  +'<td id=add1_id_row'+x+'>'+x+'</td>'
  +'<td id=add1_name_row'+x+'>'+add1_name+'</td>'
  +'<td id=add1_Email_row'+x+'>'+add1_Email+'</td>'
  +'<td id=add1_tele_row'+x+'>'+add1_tele+'</td>'
  +'<td><input type=button id=add1_edit_button'+x+' value=Edit    onclick=add1_edit_row('+x+')></th>'
  +'<th><input type=button id=add1_save_button'+x+' value=Save    onclick=add1_save_row('+x+')></th>'
  +'<th><input type=button id=add1_delet_btn'+x+'   value=Delete  onclick=add1_delete_row('+x+')></td></tr>'
)
$("#add1_delet_btn"+x).addClass('btn btn-danger');
$("#add1_edit_button"+x).addClass('btn btn-primary');
$("#add1_save_button"+x).addClass('hidden btn btn-success');
});


function add1_edit_row(no)
{
 $("#add1_edit_button"+no).addClass('hidden')
 $("#add1_save_button"+no).removeClass('hidden');

 var name=$("#add1_name_row"+no);
 var Email=$("#add1_Email_row"+no);
 var tele=$("#add1_tele_row"+no);

 var name_data=name.text();
 var Email_data=Email.text();
 var tele_data=tele.text();
 name.html("<input type='text' id='add1_name_text"+no+"' value='"+name_data+"'>");
 Email.html("<input type='text' id='add1_Email_text"+no+"' value='"+Email_data+"'>");
 tele.html("<input type='text' id='add1_tele_text"+no+"' value='"+tele_data+"'>");
}

function add1_save_row(no)
{
 var name_val=$("#add1_name_text"+no).val();
 var Email_val=$("#add1_Email_text"+no).val();
 var tele_val=$("#add1_tele_text"+no).val();


$("#add1_name_row"+no).html(name_val);
 $("#add1_Email_row"+no).html(Email_val);
 $("#add1_tele_row"+no).html(tele_val);
 $("#add1_edit_button"+no).removeClass('hidden');
 $("#add1_save_button"+no).addClass('hidden');
}

function add1_delete_row(no)
{
 $('#d'+no).html('');
}

/**/



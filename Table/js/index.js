var a=[1,2,3,5];
var s=0;
var i=0;
for(s=0;s<a.length;){
	for (i=0;i<a.length;){
		console.log(a[i]);
		console.log(a[s]);
  	if (a[i] + a[s]==8){
    alert('this is good'+a[i]+" "+a[s]);
    break;
    }
    i++;
}
s++;
}
/*
var i=0;
$('#submit').click(function create(){
var name=$('#name').val();
var Email=$('#Email').val();
var tele=$('#Tele').val();
i++;
$('.table').append(
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
 $("#edit_button"+no).addClass('hidden')
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
 $('#d'+no).html(" ");
}
*/
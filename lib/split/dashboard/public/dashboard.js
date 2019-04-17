function confirmReset() {
  var agree = confirm("This will delete all data for this experiment?");
  return agree ? true : false;
}

function confirmDelete() {
  var agree = confirm("Are you sure you want to delete this experiment and all its data?");
  return agree ? true : false;
}

function confirmWinner() {
  var agree = confirm("This will now be returned for all users. Are you sure?");
  return agree ? true : false;
}

function confirmStep(step) {
  var agree = confirm(step);
  return agree ? true : false;
}

function confirmReopen() {
  var agree = confirm("This will reopen the experiment. Are you sure?");
  return agree ? true : false;
}

$(document).ready(function(){
  console.log('placeholder for search function');
  $('#filter').on('keyup', $.debounce(750, function() {
    var keyword = $(this).val().toLowerCase();
    if (keyword != ""){
      console.log(keyword);
      $('#main .experiment').each(function() {
        if ($(this).attr('data-name').toLowerCase().indexOf(keyword) !== -1) {
          console.log("RESULT: ",$(this).attr('data-name').toLowerCase());
          $(this).removeClass('d-none').css('display','block');
        } else {
          $(this).addClass('d-none').css('display','none');
        }
      });
    }else{
      $('.experiment').removeClass('d-none');
    }
  }));
});
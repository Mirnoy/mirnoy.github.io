let sum = document.querySelector('.value__input');
document.getElementById('input-botton').onclick = OnClick;
function OnClick(){
      localStorage.setItem('sum_value', sum.value)
};


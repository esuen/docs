window.addEventListener('DOMContentLoaded', () => {
  document.onkeyup = (e) => {
    const event = window.event || e;

    switch (event.keyCode) {
      case 191:
        document.getElementById("search").focus();
        break;
    }
  }
});

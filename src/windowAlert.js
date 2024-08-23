const alertContent = "If this is your first access of the day, it may take a few minutes to connect to the database/ Se este for o seu primeiro acesso do dia, pode demorar alguns minutos para conectar ao banco de dados.";
const today = new Date().getDate();
const thisMonth = new Date().getMonth() + 1;
const thisYear = new Date().getFullYear();
var controller = localStorage.getItem("controller") != null ? localStorage.getItem("controller") : 1;

if (controller == 1) {
    window.alert(alertContent);
    localStorage.setItem("day", today);
    localStorage.setItem("month", thisMonth);
    localStorage.setItem("year", thisYear);
    localStorage.setItem("controller", 0);
} else if (localStorage.getItem("day") != today) {
    localStorage.setItem("day", today);
    window.alert(alertContent);
} else if (localStorage.getItem("month") != thisMonth) {
    localStorage.setItem("month", thisMonth);
    window.alert(alertContent);
} else if (localStorage.getItem("year") != thisYear) {
    localStorage.setItem("year", thisYear);
    window.alert(alertContent);
}
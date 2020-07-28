function countElement() {
  var count = document.body.childNodes;
  alert("кол-во узлов в теге body " + count.length);
  count = document.body.children;
  alert("кол-во дочерних узел-элементов в body " + count.length);
}

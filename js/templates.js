function htmlListDefault (task) {
  itemList = '<li id="' + task.id + '" class="list-group-item clearfix">'
    + '<div class="list-row">'
      + '<div class="list-col-01">'
        + '<input type="checkbox" onChange="checkBoxChange(this)">'
        + '<span class="ListTaskTitle">' + task.title + '</span>'
        + '<span class="ListTaskPomodoros">Num. Pomodoros: ' + task.numberOfPomodoros + '</span>'
      + '</div>'
      + '<div class="list-col-02">'
        + '<span class="pull-right buttons-Span">'
          + '<div class="btn-toolbar">'
            + '<button type="button" onclick="runTask(this)" class="btn btn-xs btn-success startButton listButton">'
              + '<span class="glyphicon glyphicon-time"></span>'
            + '</button>'

            + '<button type="button" onclick="editTaskName(this)" class="btn btn-xs btn-primary editButton listButton">'
              + '<span class="glyphicon glyphicon-pencil"></span>'
            + '</button>'

            + '<button id="test00" type="button" onclick="deleteTaskbyId(this)" class="btn btn-xs btn-danger deleteButton listButton">'
              + '<span class="glyphicon glyphicon-trash"></span>'
            + '</button>'
          + '</div>'     
        + '</span>'
      + '</div>'
    + '</div>'
    + '</li>'
  return itemList;
}

function htmlListCompleted (task) {
  itemList = '<li id="' + task.id + '" class="list-group-item clearfix">'
    + '<div class="list-row">'
      + '<div class="list-col-01">'
        + '<input type="checkbox" checked="checked" onChange="checkBoxChange(this)">'
        + '<span class="ListTaskTitle">' + task.title + '</span>'
        + '<span class="ListTaskPomodoros">Num. Pomodoros: ' + task.numberOfPomodoros + '</span>'
      + '</div>'
      + '<div class="list-col-02">'
        + '<span class="pull-right buttons-Span">'
          + '<div class="btn-toolbar">'
            + '<button type="button" onclick="deleteTaskbyId(this)" class="btn btn-xs btn-danger deleteButton listButton">'
              + '<span class="glyphicon glyphicon-trash"></span>'
            + '</button>'
          + '</div>'     
        + '</span>'
      + '</div>'
    + '</div>'
  + '</li>'

  return itemList;
}

function htmlListRunning (task) {
  itemList = '<li id="' + task.id + '" class="list-group-item clearfix">'
    + '<input type="checkbox">'
    + ' ' + task.title + ' | ' + 'Num. Pomodoros: ' + task.numberOfPomodoros
    + '<span id="currentStatusRunning" class="pull-right">Running</span>'
    + '</li>'
  return itemList;
}
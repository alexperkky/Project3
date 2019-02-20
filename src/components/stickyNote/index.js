import React from "react";
import "../stickyNote/style.css";

const stickyNote = (props) => {
  return (
    <div>
      <li>
      '<div class="note">' +
  '<a href="javascript:;" class="button remove">X</a>' +
  '<div class="note_cnt">' +
  '<textarea class="title" placeholder="Enter note title"></textarea>' +
  '<textarea class="cnt" placeholder="Enter note description here"></textarea>' +
  "</div> " +
  "</div>";
      </li>
    </div>
  );
};

export default stickyNote;
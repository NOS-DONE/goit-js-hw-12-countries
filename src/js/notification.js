import { alert, notice, info, success, error } from "@pnotify/core";
import "@pnotify/core/dist/PNotify.css";
import "@pnotify/core/dist/BrightTheme.css";
// import * as Confirm from "@pnotify/confirm";
// import "@pnotify/confirm/dist/PNotifyConfirm.css";

// error({
//     title: "Button Clicked",
//     text:
//       "You have clicked the button. You may now complete the process of reading the notice.",
//     modules: new Map([
//       [
//         Confirm,
//         {
//           confirm: true,
//           buttons: [
//             {
//               text: "Ok",
//               primary: true,
//               click: notice => {
//                 notice.close();
//               }
//             }
//           ]
//         }
//       ]
//     ])
//   });
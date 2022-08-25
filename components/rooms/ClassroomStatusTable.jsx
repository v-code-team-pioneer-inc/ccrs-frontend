// TODO: 多田さん実装お願いします
//       divの中に実装をお願いします
// 　　　 CSSはClassroomStatusTable.module.cssを使用してください
//       http://localhost:3000/rooms/ に実装が反映されます

import styles from "~/styles/rooms/ClassroomStatusTable.module.css";

export const ClassroomStatusTable = () => {
  return (
    <div>
      <body>
<link rel="stylesheet" href="style.css">
        <table border="2" style="border-collapse: collapse">
            <tr>
              <th>時間/教室</th> <th>F301</th> <th>F302</th> <th>F303</th> <th>F304</th> <th>F305</th>
            </tr>          
            <tr>
              <th id="main">9:00-10:40</th> <td></td> <td></td> <td></td> <td></td> <td></td>
            </tr>        
            <tr>
              <th id="main">10:50-12:30</th> <td></td> <td></td> <td></td> <td></td> <td></td>
            </tr>
            <tr>
              <th id="main" style="background-color:darkgray ;">昼休み</th> <td></td> <td></td> <td></td> <td></td> <td></td>
            </tr>
            <tr>
              <th id="main">13:20-15:00</th> <td></td> <td></td> <td></td> <td></td> <td></td>
            </tr>
            <tr>
              <th id="main">15:10-16:50</th> <td></td> <td></td> <td></td> <td></td> <td></td>
            </tr>
            <tr>
              <th id="main">17:00-18:40</th> <td></td> <td></td> <td></td> <td></td> <td></td>
            </tr>
            <tr>
              <th id="main">18:50-20:30</th> <td></td> <td></td> <td></td> <td></td> <td></td>
            </tr>
          </table>
</body>

    </div>
  );
};

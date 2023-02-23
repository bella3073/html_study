<h1>반응형 웹디자인&웹퍼블리셔 양성과정 버전기록</h1>
<p>ex) 날짜 - 제목 - 요약</p>
<h2>23.02.13 시작 - HTML</h2>
<p>H1~H6, p, br, inline, block</p>
<p>H1~H3은 검색키워드로 활용가능하다. H4~H6은 꼭 필요한 경우에만 이용하거나 권장안함</p>
<p>block과 inline태그는 의미에 맞게 외부/내부 구조로 구성해서 사용해야 한다.(의미 중첩되지 않도록)</p>
<hr>
<h2>23.02.14 - HTML - 문서태그</h2>
<blockquote cite="https://webty.tistory.com/85">블로그 참고 - https://webty.tistory.com/85</blockquote>
<p>blockquote, strong, em, sub, sup, code, del, q, addres, hr, s</p>
<p><br><blockquote>blockquote</blockquote> <strong>strong</strong> <em>em</em> <sup>sup</sup> <sub>sub</sub> <code>code</code> <del>del</del> <q>q</q> <address>address</address> <s>s</s> </p>
<p>gnb, inb, snb, fnb, breadcrumbs</p>
<h2>23.02.15 - HTML - 문서태그</h2>
<p>ul, ol 태그 사용하여 목록 작성할 때, 목록 설명으로 p 태그도 함께 써야한다면 /ul, /ol 태그 안 쪽에 작성하여야 함</p>
<ol>
  <li>목록 순서 있는 것은 ol 태그로</li>
  <li>ul, ol 형제태그로는 <em>em</em>과 <strong>strong</strong>이 있음</li>
  <li>목록 순서 없는 것은 ul 태그로</li>
</ol>
<dl>
  <dt>dl, dt, dd</dt>
  <dd>dl : dt와 dd를 묶는 박스</dd>
  <dd>dt : 제목</dd>
  <dd>dd : 내용</dd>
  <dd>dd : 내용 안에 ul, ol 을 넣을 수 있어 목록 정리 가능함</dd>
</dl>
<div class="study">
  <h2>23.02.16 - HTML - 시맨틱태그, 그룹태그</h2>
  <dl>
    <dt>main, div, class</dt>
    <dd>main은 가장 큰 틀</dd>
    <dd>div는 2개 이상의 블록 혹은 인라인을 묶는데 사용 (그룹과 같은 용도, div class="묶은 태그 그룹명"으로 정리함)</dd>
    <dd>class 태그는 어디에든 사용 가능함</dd>
  </dl>
</div>
<h2>23.02.17 - HTML - 이미지, 비디오 태그</h2>
<ul>
  <li>img src="./02_image_video/images/qucik_topinfo.jpg" alt="24시간 주문가능, 오후 7시까지 결제 시 당일발송"</li>
  <li>이미지 업로드 태그 / ./ : 현재경로, / : 하위폴더로 가는 경로 / alt : 시각장애인들을 위한 이미지 설명</li>
  <li>img src="./02_image_video/images/m_box_bg01.gif" alt=""</li>
  <li>alt="" 이렇게 빈 칸으로 남겨둘 수도 있음. 이미지의 해석이 불필요할 때 사용</li>
  <li>video src="./02_image_video/video/cat.mp4" autoplay muted loop controls</li>
  <li>비디오 업로드 태그 / autoplay 자동재생, muted 무음모드, loop 반복재생, controls 컨트롤바</li>
</ul>
<h2>23.02.20 - Table</h2>
<table>
  <thead>
    <tr>
      <th>구분</th>
      <th>태그명</th>
      <th>의미</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td rowspan="3">block</td>
      <td>&lt;tr&gt;</td>
      <td>가로행 태그</td>
    </tr>
    <tr>
      <td>&lt;td&gt;</td>
      <td>내용(열)태그</td>
    </tr>
    <tr>
      <td>&lt;th&gt;</td>
      <td>제목(열)태그</td>
    </tr>
  </tbody>
</table>
<h2>23.02.21 - HTML - form</h2>
<form action="#" method="get">
<fieldset>
<legend>form 퀴즈</legend>
<span>1. 다음 중 label for와 연관된 input 속성은?</span><br>
<label><input type="radio" name="quiz" value="id">1. id</label><br>
<label><input type="radio" name="quiz" value="class">2. class</label><br>
<label><input type="radio" name="quiz" value="name">3. name</label><br>
<span>2. 한 문항에서 여러 개를 체크할 수 있게 해주는 속성은?</span><br>
<label><input type="radio" name="quiz2" value="radio">1. radio</label><br>
<label><input type="radio" name="quiz2" value="checkbox">2. checkbox</label>
</fieldset>
</form>
<h2>23.02.23 - CSS - 첫시간, font, html 효과 reset</h2>
<p>html을 reset하는 css명은 reset.css</p>
<p>HTML = 와 CSS : , HTML / 와 CSS ; 은 같은 뜻으로 사용됨</p>
<p>디자인 적용할 때에는 reset 밑으로 작성할 것.<br>
  reset 위로 작성 시, 디자인도 초기화 됨.</p>
<ul><strong>font</strong></ul>
  <li>전체적으로 적용할 때에는 reset.css에 작성</li>
  <li>메인 글꼴에 문제가 생겼을 때, 다른 글꼴을 대신 보여주기 위해 두 가지 글꼴설정함</li>
<p><br></p>
<ol><strong>웹 주소 글꼴을 가져오는 방법</strong></ol>
  <li>구글 폰트 사이트에 들어가 마음에 드는 글꼴 찾기</li>
  <li>사용하려는 폰트 크기 선택 후, @import → style 사이 텍스트 복사 붙여넣기 (reset.css 넣을 경우 가장 윗쪽)</li>
  <li>파란색 박스 부분 복사 붙여넣기 {} 사이 첫번째에 (하단 코드 참고)</li>

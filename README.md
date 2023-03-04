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
<p><br><blockquote>blockquote</blockquote> <strong>strong</strong> <em>em</em> <sup>sup</sup> <sub>sub</sub> <code>code</code> <del>del</del> <q>q</q> <address>address</address> <s>s</s>
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
<p>font</p>
<ul>
  <li>전체적으로 적용할 때에는 reset.css에 작성</li>
  <li>메인 글꼴에 문제가 생겼을 때, 다른 글꼴을 대신 보여주기 위해 두 가지 글꼴설정함</li>
</ul>
<p><br></p>
<p>웹 주소 글꼴을 가져오는 방법</p>
<ol>
  <li>구글 폰트 사이트에 들어가 마음에 드는 글꼴 찾기</li>
  <li>사용하려는 폰트 크기 선택 후, @import → style 사이 텍스트 복사 붙여넣기 (reset.css 넣을 경우 가장 윗쪽)</li>
  <li>파란색 박스 부분 복사 붙여넣기 {} 사이 첫번째에 (하단 코드 참고)</li>
</ol>
<h2>23.02.24 - CSS - 글꼴 부분 설정법, favicon</h2>
<p>**폰트 사이즈 작성했을 때, 주석으로 몇 px인지 적어두면 좋음</p>
<p><em>폰트 px -> em으로 바꿔주는 이유</em></p>
<p>em은 상대적인 사이즈라 상대가 사용하는 디바이스에 최적화된 크기로 자동 설정됨<br>
  하지만 em은 근접한 부모도 따져보기 때문에, em보다는 <strong>rem</strong>단위를 써야함</p>
<p><em>글꼴 설정할 때, 가장 많이 사용하는 코드</em></p>
<ul>
  <li><em>글꼴</em> font-family:'글꼴', font</li>
  <li><em>사이즈</em> font-size:0.938rem;</li>
  <li><em>행간</em> line-height:1.6;</li>
  <li><em>자간</em> letter-spacing:-0.02em;/* figma -2% */</li>
</ul>
<p><em>글꼴 부분 설정법</em></p>
<ul>
  <li>reset.css가 아닌, design.css 상단에 import url 붙이기 (import는 항상 상단에 위치**)</li>
  <li>font-family는 적용하려는 곳에 붙여넣기</li>
</ul>
<p><em>favicon 아이콘 이용법</em></p>
<ul>
  <li>피그마 플러그인 이용하기</li>
  <li>flaticon 등 해외 유/무료 아이콘 사이트 사용하기</li>
  <li>일러스트레이터, 포토샵, 피그마를 이용하여 직접 그려서 사용하기</li>
</ul>
  <h2>23.02.27 - CSS - float</h2>
  <p>블록 요소의 흐름을 변경하기 위해 사용하는 레이아웃 배치 css 속성</p>
  <p>HTML4 이전 버전부터 사용하던 레이아웃 개념으로 호환성이 높음</p>
  <p>웹 페이지에서 좌우로 배치되는 레이아웃 제작 시 사용</p>
  <p><em>자식에 float적용 시 생기는 부모 오류 해결법</em></p>
  <ul>
    <li>높이 강제부여 (많이 사용되지는 않음/ ex, height:100px;</li>
    <li>자식높이재인식 (ex, overflow:hidden;)</li>
    <li>가상자식생성 (ex, .wrap::after {clear:both; display:block; content:'';} )</li>
  </ul>
 <h2>23.02.28 - CSS - 가운데정렬법, 박스쉐도우, nth</h2>
  <dl>
    <dt>가운데 정렬법</dt>
    <dd>margin:0 auto; /* block 가운데 정렬 (화면크기를 줄이거나 키워도 항상 중앙에 위치하도록 함, block만 가능!!) */</dd>
    <dd>text-align:center; /* inline 가운데 정렬 */</dd>
    <dd>line-height:100px; /* 1줄일 경우만 가능, 수직가운데정렬 */</dd>
    <dt>도형에 쉐도우 만드는법</dt>
    <dd>box-shadow:x축 y축 blur color;</dd>
    <dt>nth</dt>
    <dd>nth (even) : 짝수</dd>
    <dd>nth (odd) : 홀수</dd>
    <dd>nth (숫자n) : 숫자배수로</dd>
    <dd>nth (숫자n+1) : 숫자 1부터 숫자 n배수로 선택됨</dd>
  </dl>
 <h2>23.03.02 - CSS - 배경이미지 넣는 법</h2>
 <ul>
  <li>background-image:url(경로);</li>
  <li>background-size:contain;</li>
  <li>background-size:100%;/*w h*/</li>
  <li>background-size:cover;</li>
  <li>background-repeat:no-repeat; /* 기본repeat */</li>
  <li>background-position:right top; /*x y*/</li>
  <li>background-position:right -100px; /*-px로 해야 윗쪽으로 올라감*/</li>
 </ul>
<h2>23.03.03 - CSS - 글자 사이 도형 넣기</h2>
<ul>
  <li>
    <p>1. content:'|'; display:inline; margin-left:10px;</p>
    <p>1 방법의 단점 : 글자크기보다 작거나 크게 설정이 불가능해 디자인 다양성이 부족함</p>
    <p>2. width:2px; height:5px; background-color: red;
          content:''; display: inline-block;
          position:relative;
          right:-7px; top:2px;</p>
    <p>2번 방법을 더 많이 사용함</p>
  </li>
</ul>
<h2>23.03.04 - CSS - 말 줄임 처리 하는 법</h2>
<ul>
  <li>
    <p>원하는 너비 설정 (부모 크기의 %로 설정)</p>
    <p>text-overflow:ellipsis; -> 외부처리를 말 줄임으로 설정</p>
    <p>white-space:nowrap; -> 한 줄처리 설정</p>
    <p>overflow:hidden; -> 정해진 크기 안에서만 보이게 하는 설정</p>
  </li>
</ul>

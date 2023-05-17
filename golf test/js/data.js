const qnaList = [
    {
      q: '함께 라운딩 가기로 친한 친구들 3명 중 1명이 급한 일이 생겨 못 간다고 한다. 당장 내일이라 취소할 수도 없는 상황! 나의 선택은?',
      a: [
        { answer: '안 친한 애라도 불러서 같이 치자 ~', type: ['E'] },
        { answer: '돈 조금 더 내서 3인 플레이 하자.', type: ['I'] },
      ]
    },
    {
      q: '라운딩 전날 밤, 일찍 잠자리에 누웠다. 내가 할 행동은?',
      a: [
        { answer: '내일 가는 골프장 코스 정보를 찾아본다.', type: ['J'] },
        { answer: '잠이나 자자. 뭘 그렇게까지 해. 그 홀 그 홀 치면 돼 ~', type: ['P'] },
      ]
    },
    {
      q: '티오프 한 시간 전, 주차장에 여유롭게 도착! 오래 운전을 했더니 너무 피곤하다. 차에서 30분 정도 한숨 자고 가고 싶다. 어떡하지? 몸 풀고 퍼터 연습도 해야 한다. 나의 선택은?',
      a: [
        { answer: '아휴 30분만 자고 가자.', type: ['P'] },
        { answer: '정신 차려! 몸 풀고 퍼터 연습하려면 지금 가야 해.', type: 'J' },
      ]
    },
    {
      q: '내가 선호하는 캐디 스타일은?',
      a: [
        { answer: '재밌고, 반응을 잘해주는 캐디', type: ['F'] },
        { answer: '실질적인 도움을 주는 캐디', type: ['T'] },
      ]
    },
    {
      q: '친구들이 모였다. 첫 홀을 향해 걸어가는데, 동반자가 오장 내기를 하자고 한다. 나의 반응은?',
      a: [
        { answer: '돈내기는 무조건 콜이지!!', type: ['E'] },
        { answer: '에이 무슨 내기야 ~ 그냥 재미로 치자 ~', type: ['I']},
      ]
    },
  
    {
      q: '첫 홀 드라이브 샷을 준비하는데, 내 비거리로 간신히 넘길 수 있는 해저드가 앞에 있다. 그런데 오늘따라 앞바람이 세게 부는 거 같다. 내 첫 드라이브 샷은?',
      a: [
        { answer: '무리하다가 괜히 빠질 것 같아. 안전하게 끊어서 가자.', type: ['S'] },
        { answer: '10번에 8번은 성공하는 거리야. 시원하게 때리자!', type: ['N'] },
      ]
    },
    {
      q: '동반자가 공이 자꾸 슬라이스 난다며 매우 예민해져 있다. 뭐가 문제인지 내 눈에는 보이는데 .. 어떡하지?',
      a: [
        { answer: '격려와 함께 고쳐야 하는 부분을 조언해 준다.', type: ['F'] },
        { answer: '괜히 확실하지 않은 조언은 안 하는 게 좋아. 가만히 있자.', type: ['T'] },
      ]
    },
    {
      q: '내기하자고 한 친구가 공을 슬쩍 치기 좋은 곳으로 옮기는 걸 목격했다. 나랑 눈을 마주치고는 머쓱한 듯 큰소리로 웃는데, 어떡할까?',
      a: [
        { answer: '허허허 이번에만 눈 감아준다!', type: ['E'] },
        { answer: '이놈이?! 너 한타 벌타야!', type: ['I'] },
      ]
    },
    {
      q: '우리 앞 조의 젊은 친구들이 사진 찍느라 정신이 팔려, 우리 조가 계속 기다리고 밀리는 상황. 이 와중에 초보 캐디는 눈치만 보고 있다. 어떡하지?',
      a: [
        { answer: '젊은 친구들이 그럴 수도 있지 ~ 넘어간다.', type: ['N'] },
        { answer: '이럴 거면 골프장에 왜 오는 거야! 부드럽게라도 한마디 한다.', type: ['S'] },
      ]
    },
    {
      q: '나인홀 끝. 친구가 그늘에서 막걸리를 한잔하자고 한다. 이 친구는 술을 먹으면 집중력이 완전히 흐트러지는 애인데, 어쩌지?',
      a: [
        { answer: '목이나 축이고, 술은 끝나고 마음 편하게 마시자.', type: ['F'] },
        { answer: '우리 내기한 거 알지? 막걸리 좋지 ~ 마시자.', type: ['T'] },
      ]
    },
    {
      q: '이런! 자꾸 퍼팅 실수를 한다. 퍼터 고수 동반자가 내 퍼팅의 문제점과 함께 새로운 퍼팅 방법을 알려주었다. 5m 남은 거리. 성공하면 버디다! 나의 선택은?',
      a: [
        { answer: '내 방법은 문제가 있다니까 .. 새로운 방법으로 해보자!', type: ['P'] },
        { answer: '중요한 순간은 하던 대로 가는 거야. 내 방법 그대로!', type: ['J'] },
      ]
    },
    {
      q: '드디어 마지막 홀이다. 짧은 파 5홀에 현재 순위 2등! 드라이브 샷이 잘 맞아서 세컨드 샷이 3번 우드 거리만큼 남았다. 그런데 그린 앞에 큰 벙커가 있다. 나의 선택은?',
      a: [
        { answer: '투온 시도를 한다.', type: ['N'] },
        { answer: '끊어서 쓰리온으로 간다.', type: ['S'] },
      ]
    }
  ]

  const infoList = {
    ENFP: 
      {name:'우당탕탕 골프는 내 인생'
      , comment: ['골프를 통해 삶을 즐기는 방법을 찾고자 하는 당신, 골프 치며 성장하는 모든 과정을 사랑하는군요!?', '진지하고 경쟁하는 분위기 보다는 밝고 가벼운 라운딩을 선호하는 당신은 누구와 어울려도 즐거운 골프 라이프를 즐길 수 있을 거예요.', '때때로 게임에 급하게 임하여 분별력을 잃고 자신의 루틴을 깨는 스윙을 할 수 있어요. 제대로 된 스윙 방식을 익히고, 도전적인 전략을 사용할 때면 신중하게 계획하고 다음 샷을 고려하며 게임을 이어나가는 것이 중요합니다.']
    }
    , ENFJ: {name:'함께하는 우리는 하나!\n팀을 사랑하는 골퍼'
      , comment: ['함께하며 성취하는 것에 쾌감을 느끼는 당신은 동반자 모두가 만족스러운 스코어를 기록했을 때 큰 기쁨을 느끼겠군요!?', '동반자의 공이 어려운 상황에 놓여있을 때, 내가 알고 있는 지식을 총 동원해 상대에게 기분 나쁘지 않은 조언을 해줄 수 있는 사람입니다. 함께 고민하고 전략을 구상해 주는 당신을 사람들은 싫어할 수가 없겠어요.', '자신의 방법만을 주장하기 보다는 다른 사람의 의견도 경청하며 소통하는 것이 당신의 골프 실력 향상에도 큰 도움이 될 거예요. 누군가의 조언을 기분 좋게 받아들여 보세요.']
    }
    , ENTP: {name:'골프계의 혁명가'
      , comment: ['승부욕이 강하며 강력한 자아를 가지고 있군요!? 경쟁 상대에게 쉽게 말리지 않겠어요.', '결과를 하나하나 따지기 보다는 열정적으로 문제를 해결하며 상황을 즉각적으로 대처하는 당신. 같이 골프 치는 사람들로부터 많은 인정을 받겠어요.', '열정도 많고 욕심도 많은 당신. 창의적인 플레이도 좋지만 안정적이고 일관된 스윙도 중요하다는 걸 잊지 마세요!', '이기는 것도 중요하지만, 즐거운 플레이도 중요한 거 알죠?']
    }
    , ENTJ: {name:'목표를 향해 달리는\n카리스마 골퍼'
      , comment: ['도전을 즐기는 성격으로, 충분한 시간과 자원이 주어진다면 어떠한 목표도 달성할 수 있다고 믿는군요.', '전략적 사고 능력과 장기적 목표에 집중하고 결단력 있게 계획을 실행하는 능력이 골프를 칠 때에도 나타나겠어요.', '결정적인 순간에 높은 집념과 타고난 리더십으로 상대방을 제압할 수 있겠어요.', '자신에게 주어진 상황이나 능력에 대해 지나칠 정도의 확신을 갖지 않도록 주의해야 해요. 위험을 감수하면서 예상치 못한 플레이를 할 수 있으니까요. 합리적이고 전략적인 판단으로 최선의 결과를 꾸준히 추구하는 노력이 필요합니다.']
    }
    , ESFP: {name:'같은 팀 하고 싶은 \n긍정 에너지 만땅 골퍼'
      , comment: ['골프와 사람, 두 마리의 토끼를 모두 잡는 당신은 골프에 열정적인 동시에 사람들 사이에서도 인기가 많군요!? 이런 성향으로 즐거움과 승리 모두 누릴 수 있겠어요', '당신의 긍정적인 에너지와 활기찬 태도는 같이 골프 치는 사람도 웃게 만들어요', '감각적인 스윙을 많이 하는 편이기 때문에, 익숙하지 않은 코스에서는 실수가 잦아 불리할 수 있어요. 다양한 스윙이 몸에 밸 수 있도록 충분한 연습을 하는 것이 중요해요.']
    }
    , ESFJ: {name:'함께 라운딩 하고 싶은 1위 골퍼'
      , comment: ['사교성이 뛰어나고 연대감이 강한 당신은 주변 사람들이 믿고 따르는 인기쟁이군요!?', '책임감이 강하고 세심한 성격이기 때문에, 지금처럼 체계적인 계획을 세우는 것이 좋습니다. 또 골프 경기에서도 명확한 목표와 계획을 세우고, 그에 따라 일관되게 행동하는 것이 좋은 스코어를 내는 지름길입니다.', '당신은 다른 사람의 의견을 경청하고 공감하는 능력이 뛰어납니다. 그러나 골프에서의 모든 의견이 항상 옳은 것은 아니기 때문에, 자신이 판단을 내리는 데에 있어, 본인의 경험과 지식을 적극적으로 활용하는 것이 중요합니다.']
    }
    , ESTP: {name:'성공한 사업가 마인드의 골퍼'
      , comment: ['활기차고 열정적인 성격으로 경쟁심이 강한 당신은 승리를 위해 최선을 다하는군요!?', '도전정신과 탁월한 순발력, 자신만의 스타일과 전략까지 갖춘 당신은 골프도 사업가 마인드로 하네요.', '대담하고 결단력이 강한 만큼, 경기 중 실수가 잦을 수 있어요. 도전적인 상황에서도 열정과 욕심을 컨트롤 할 수 있는 균형 잡힌 태도를 유지하는 연습이 필요합니다.', '붙임성도 좋고 재미도 있는 당신이지만 상대를 압박할 수 있는 과도한 구찌는 참아줘요~']
    }
    , ESTJ: {name:'스포츠 맨십을 보여주는 골퍼'
      , comment: ['활기차고 목표 지향적인 성격을 가진 당신은 거리를 예측하며 정확한 스윙으로 게임을 성공적으로 풀어나갈 수 있는 능력을 갖고 있군요.', '당신의 확신과 논리는 비교적 정확한 편입니다. 적극적인 스윙으로 경기를 풀어나가 보세요.', '그러나 때때로 감정 기복이 심해 충동적인 행동을 할 수도 있습니다. 특히 다른 플레이어가 앞서는 것에 불필요하게 집착하지 않도록, 욕심을 조절하고 자기 통제력을 유지할 수 있도록 노력해 보세요. 진정한 스포츠맨이 될 수 있을 것입니다.']
    }
    , INFP: {name:'"나"보다 "우리"가 중요한\n 배려왕 골퍼'
      , comment: ['나 혼자 잘 치는 것보다는 좋은 분위기에서 모두가 즐거워하는 라운딩을 기대하는군요!?', '완벽주의 성향이 있는 당신은 골프에서도 자신의 약점을 지속적으로 개선하고, 필요로 하는 역량을 쌓기 위해 노력합니다.', '때로는 예민함과 불편함에 충동적인 스윙을 할 수 있습니다. 경기 중, 지나치게 긴장하거나 멘탈이 흔들리는 것을 대비하기 위해, 전날 충분한 휴식을 취하거나 멘탈을 빠르게 회복할 수 있는 자신만의 방법을 찾아보세요.']
    }
    , INFJ: {name:'집중력과 여유로움을 갖춘\n귀족 골퍼'
      , comment: ['내성적인 성격의 당신은 누구보다 높은 집중력과 여유로움으로 골프를 치는군요!?', '섬세한 관찰력과 분석적인 사고 능력은 당신의 스윙 실력을 높이는 데에 큰 도움이 될 것입니다. 실력이 빠르게 성장하는 순간이 종종 올 것입니다.', '완벽주의 성격도 갖고 있는 당신. 자기 비난이나 자신의 부족함에 스스로를 과소 평가하지 말고, 스스로를 어르고 달래어 긍정적인 플레이를 해보세요.', '목표를 이루기 위한 노력도 중요하지만, 때로는 한계를 받아들이고 즐겁게 플레이하는 마음도 중요하답니다.']
    }

    , INTP: {name:'골프계의 아인슈타인'
      , comment: ['넘치는 아이디어와 창의력을 갖고 있는 당신. 자신만의 방식으로 플레이를 즐기는군요!?', '정형화된 골프 규칙들을 넘어서는 새로운 기술이나 전략으로 실력을 업그레이드시킬 수도 있겠어요', '가끔 이론과 분석에 너무 치우쳐 지루한 스윙과 함께 게임에서 활약하지 못할 수도 있겠어요. 다른 사람들과 소통하거나, 올바른 스윙 경로를 나타내는 시각적인 피드백을 받아보세요. 도움이 될 거예요!']
    }
    , INTJ: {name:'골프계의 나폴레옹, 전략형 골퍼'
      , comment: ['독립성이 매우 강하며 혼자서 행동하는 일을 두려워하지 않는 당신. 강단 있는 플레이를 즐기는군요!?', '상상력이 넘치면서도 결단력이 강하고, 야망이 넘치면서도 차분하고, 호기심이 많으면서도 집중력이 높은 성격 유형입니다. 전략적인 플레이에 소질이 있어요.', '지나친 분석과 계획에 치중하여 자유롭고 확신 있는 스윙에 제한적일 수 있어요. 자신의 실력을 과소평가하지 말고, 자신 있게 스윙하세요.']
    }
    , ISFP: {name:'골프는 즐거움! 자유로운 골퍼', 
      comment: ['경쟁보다는 즐거움을 추구하는군요!?, 자유로운 분위기에서 가장 빛나는 당신! 경쟁이나 압박감 없이 친한 친구들과 함께 하는 라운딩을 가장 좋아하겠어요.', '창의적인 플레이와 자신만의 스윙으로 상대를 감동시킬 수 있는 예술가 유형입니다. 한 코스, 한 스윙을 소중하게 생각하는 모습이 멋있어요.', '장시간 집중과 꾸준한 훈련을 어려워하겠군요. 실력 향상을 위해서 매일 짧게라도 정해진 계획을 지키며 연습하는 것이 중요하답니다.']
    }
    , ISFJ: {name:'모든 것을 갖춘 완벽한 골퍼', 
      comment: ['신중하고 치밀하며 계획적이기까지 한 당신은 골퍼로서 성공할 수 있는 모든 성격 유형을 갖추고 있습니다.', '당신의 인내력은 라운딩 중의 소음이나 외부적인 요인에도 높은 집중력을 유지할 수 있게 해주며, 참을성과 세심함은 감정을 잘 컨트롤하고, 완벽한 플레이를 할 수 있도록 도와줍니다.', '섬세한 관찰력과 분석적 사고 능력으로 한타 한타 정확한 스윙을 한다면, 당신은 최고의 골퍼가 될 수 있을 것입니다.', '집중력과 자기 훈련을 요하는 골프에 가장 최적화된 타입이지만, 당신에게도 스트레스와 긴장으로부터 멀리 떨어질 수 있는 자신만의 루틴이나 방법은 반드시 필요합니다.']
    }
    , ISTP: {name:'나는 나의 길을 걷는다!\n독고다이 골퍼'
      , comment: ['평상시 일 처리 능력이 뛰어난 당신은 골프를 칠 때에도 빠른 대처능력과 직관력으로 자신만의 플레이를 이끌어 나가는군요!?', '당신은 비교적 높은 수준의 집중력과 이를 오랜 시간 유지할 수 있는 능력을 갖고 있습니다.', '이전 경기에서 얻은 경험과 지식을 적극적으로 활용하며 나만의 골프 전략을 만들어보세요. 이러한 전략이 누구보다 잘 먹히는 유형입니다.', '당신은 스스로 기술적인 역량을 향상시킬 수 있습니다. 다른 사람의 조언이나 지나친 경쟁심에 집착하는 것은 본인의 멘탈을 흔드는 주 요인이니 자신에게 집중하세요.']
    }
    , ISTJ: {name:'근면 성실 정직 골퍼'
      , comment: ['규칙과 원칙을 따르며, 정확한 계획과 기술적인 전략을 중요시하는 당신의 성격은 골프에서도 나타납니다.', '체계적인 훈련과 성실함을 바탕으로 라운딩에서는 일관된 플레이와 정확한 스윙을 보여줄 수 있겠군요!?', '당신의 성실함과 집중력은 골프 실력 성장에 긍정적인 영향을 주지만, 때때로 나타나는 완벽에 대한 과도한 신경성과 극단적인 집착은 반드시 조심해야 할 요소입니다.', '세부적인 기술을 중요시하는 하는 지금의 마음가짐으로 다양한 피드백을 받으며 연습하고, 라운딩에 나와서는 느긋한 마음을 가지세요. 조급함과 신경질적인 성향은 게임을 망칠 위험이 있습니다.']
    }
}

const hashtag = {
  ENFP: ['#좋은 사람들과 #행복한 라운딩', '박인비 선수']
  , ENFJ: ['#팀워크 #우리는하나 #함께 이루는 성취', '고지우 선수']
  , ENTP: ['#승부욕 #열정 #이길테야', '유현주 선수']
  , ENTJ: ['#도전정신 #목표의식 #확신의 리더상', '넬리코다 선수']
  , ESFP: ['#긍정에너지 #활기찬 #인기쟁이', '김효주 선수']
  , ESFJ: ['#믿고 따르는 #인기쟁이 #목표-계획-실행의 왕', '황정미 선수']
  , ESTP: ['#열정 #도전정신 #뭐든 잘 해낼 사람', '고진영 선수']
  , ESTJ: ['#스포츠맨십 #확신의골퍼 #목표지향적', '박민지 선수']
  , INFP: ['#완벽주의 #무한한 노력 #팀을 사랑하는', '성유진 선수']
  , INFJ: ['#타고난 집중력 #여유로움 #이게 바로 귀족골퍼', '전인지 선수']
  , INTP: ['#나만의 스타일 #창의적인 플레이 #모두 겸비한', '임희정 선수']
  , INTJ: ['#혼자서도 잘하는 나 #하나씩 #차근차근', '한진선 선수']
  , ISFP: ['#재밌는게 좋아 #연습은 싫어 #라운딩이 좋아', '박보겸 선수']
  , ISFJ: ['#골프를 위해 #태어난 사람 #태생부터 골퍼', '박세리 선수']
  , ISTP: ['#일도 잘하고 #골프도 잘하는 #나 뭐지?', '유해란 선수']
  , ISTJ: ['#반칙 싫어 #성실함으로 #마침내 성공', '최혜진 선수']
}
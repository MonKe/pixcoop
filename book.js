// small sample adventure
var Book = 

{
  "Once upon a time, an old forest...": {
    "imgMap": "60(c6)000c0ccc(04)c00(c5)(05)(c6)(64)(c11)60(c4)6c00cc0ccc00(c4)000ccc(04)(c7)66ccc6(cf)60ccc6(c5)00(c6)00c(04)ccc000cc0(c4)6ccc66(c4)00c00(c6)60(c7)(04)ccc(06)cc00ccc(05)(c9)6cc66c(06)(c5)60(c8)000cc(08)(c4)6c(06)c00ccc0(c4)06c(06)c0ccc6(c4)6c6cc000cc(0b)c6c(0a)c00ccc0006c(04)cc0ccc6(c6)66(c9)(08)c66(05)6(05)c0ccc0006c(05)c00cc6(c7)6(cc)(05)cc6(04)6060(c5)6ccaaa6cc(04)c00cc66(c1a)6c(04)600(c4)a6cc(a4)6cc000c0aac76(c1a)6cc06000(c5)aa6cc(a4)cccaacaaccc76(c1c)00666(c4)(a4)6(ce)666c7(c5)(65)ccaa(ca)accc(66)ca6aaa766(c8)aa666c66ccac6caa63666(c5)accaca(c5)(64)77ccc(a5)766(c5)aaa666a(ca)aa3(64)caa(c8)accc66766c(a4)3aaa66(c5)a(65)ccaacca(c6)aa(65)(a6)ca(c5)(64)(ab)76(c4)(64)aaccc(ba)caaa(66)ca(c4)aac(64)7(a5)b(a6)6ccc7666aaa(bf)(a4)(68)(a5)666(a4)b(aa)66c7766aaa(b10)(a4)(6a)aaa66(a7)6(a8)6cc766aaa(b12)(a4)(68)(a7)baaa(66)(a4)77cc7(64)abbb(a6)ba(b7)(a15)(69)a667ccc7666abbaab(a7)baa(b8)(75)aa6a6(a4)(6f)7cc6776(a9)bbaabbba(b6)7722577b(a4)(66)a(6c)ccc677(ab)(bc)72552279(a6)(611)7cc667(a6)55aa(6b)bb72552279(a7)(610)a(c4)6(a5)5355aa(6c)95225597(b4)(a9)(6c)(c4)(a5)(34)(a4)(6a)79925977a(b5)(a5)3aaa(6c)cc(a6)88(ad)66(77)(a5)bbb(a5)3(a6)(69)caaa33399(a10)(74)6(a7)(b4)(ab)(69)aaa338(a12)(68)aa666(b4)(ae)(65)(a14)666a(6b)a666(b5)(ac)(64)",
    "linkMap": "(0188)(24)(037)(26)(036)(26)(036)(25)(037)22(024f)(35)(036)(37)(035)(38)(023)11(0f)30(36)(022)(14)(0e)(35)033(022)(14)(0e)(38)(023)11(0f)(37)(021)(15)(010)(34)(023)111(072)",
    "linkPal": {
      "1": {
        "title": "Ho, a <em>Phallus Rottus<\/em> mushroom!<br\/>They say it makes incredible omelets...",
        "page": "Mushroom picking"
      },
      "2": {
        "title": "Wouldn't that be a path?",
        "page": "Lost in the woods?"
      },
      "3": {
        "title": "No time to waste:<br\/>Granny's waiting!",
        "page": "Red riding hood"
      }
    }
  },
  "Mushroom picking": {
    "imgMap": "60(c6)000c0ccc(04)c00(c5)(05)(c6)(64)(c11)60(c4)6c00cc0ccc00(c4)000ccc(04)(c7)66ccc6(cf)60ccc6(c5)00(c6)00c(04)ccc000cc0(c4)6ccc66(c4)00c00(c6)60(c7)(04)ccc(06)cc00ccc(05)(c9)6cc66c(06)(c5)60(c8)000cc(08)(c4)6c(06)c00ccc0(c4)06c(06)c0ccc6(c4)6c6cc000cc(0b)c6c(0a)c00ccc0006c(04)cc0ccc6(c6)66(c9)(08)c66(05)6(05)c0ccc0006c(05)c00cc6(c7)6(cc)(05)cc6(04)6060(c5)6ccaaa6cc(04)c00cc66(c1a)6c(04)600(c4)a6cc(a4)6cc000c0aac76(c1a)6cc06000(c5)aa6cc(a4)cccaacaaccc76(c1c)00666(c4)(a4)6(ce)666c7cc5(34)566ccaa(ca)accc(66)ca6aaa766(c8)aa666c66cc55(36)666(c5)accaca(c5)(64)77ccc(a5)766(c5)aaa666accc55(38)(64)caa(c8)accc66766c(a4)3aaa66(c5)a(65)cca55(39)a(65)(a6)ca(c5)(64)(ab)76(c4)(64)aacc55333888(34)aaa(66)ca(c4)aac(64)7(a5)b(a6)6ccc7666aaabb5333(85)333b(a4)(68)(a5)666(a4)b(aa)66c7766aaabb533889998833bb(a4)(6a)aaa66(a7)6(a8)6cc766aaabb333996999833(b4)(a4)(68)(a7)baaa(66)(a4)77cc7(64)ab33396c69cc33(b5)(a15)(69)a667ccc7666ab3339c0c90c3ba99(b7)(75)aa6a6(a4)(6f)7cc6776aaa339966968ab9889(b5)7722577b(a4)(66)a(6c)ccc677a99a(9b)bb8(b5)72552279(a6)(611)7cc667a98(94)0069899(67)bb72552279(a7)(610)a(c4)6a9a66990068(66)aaa66695225597(b4)(a9)(6c)(c4)aa666890c8(68)aa66679925977a(b5)(a5)3aaa(6c)ccaa633(84)(66)(a6)66(77)(a5)bbb(a5)3(a6)(69)caa63338(66)(ab)(74)6(a7)(b4)(ab)(66)006aaa338a6(a4)666(a9)(68)aa666(b4)(ae)66006(a14)666a(6b)a666(b5)(ac)(64)",
    "linkMap": "(029a)(26)(035)(28)(033)(2a)(031)(2b)(030)(2c)(030)(2c)(030)(2c)(030)(2c)(030)(2c)(030)(2b)0022(02e)(29)00(24)(02b)220(2b)002(02b)(2d)(02f)2000(26)(036)(25)(037)(24)(039)2(032)11(03a)11(03d)",
    "linkPal": {
      "1": {
        "title": "Stop picking",
        "page": "Once upon a time, an old forest..."
      },
      "2": {
        "title": "<strong>Graaahuuuahhrr<\/strong>",
        "page": ""
      }
    }
  },
  "Red riding hood": {
    "imgMap": "(0204)(44)(024)5(012)(46)(022)555(011)(46)(01b)111(05)55(011)3(45)(01b)(16)0aaa(011)(35)4(01b)(14)555aaa(013)3334e(f4)(016)111(55)a(013)(45)ee(f5)(016)133553(012)(44)344ee00fff(014)6663353355(0f)(44)3344ee0fff(014)66c66633555(0e)(44)33344eeeff(015)6c66c66635(0e)(45)33444eeef(016)(66)c6(014)33(44)eee(016)6c6aaa666(012)feee44(e6)(015)(a7)6c(010)(f6)(e8)(014)(ad)(0d)fddd1ff(e7)(014)(ad)77(0b)fdd(14)f(e6)(014)(ac)007(0b)edd1112211(e4)(013)(ab)(04)7(0a)4(95)222dd111(015)(aa)(04)7(0a)400(d7)000990004(010)(aa)(04)7(0a)4(0d)(94)4(08)bb(08)ccc00(64)0007(01b)4(09)bb(03d)",
    "linkMap": "(0204)(34)(037)(36)(036)(36)(01b)222(018)(36)(01b)(26)(015)(36)(01b)(27)(035)(28)(036)(26)(037)(27)(037)(25)(039)22(0244)11(03a)11(03d)",
    "linkPal": {
      "1": {
        "title": "I don't want no family issues.",
        "page": "Once upon a time, an old forest..."
      },
      "2": {
        "title": "I <em>saw<\/em> you hanging out again<br\/>with that Mr. Wolf!",
        "page": ""
      },
      "3": {
        "title": "Lolz granma ay 8 ur basket!",
        "page": "On the road"
      }
    }
  },
  "Lost in the woods?": {
    "imgMap": "(062)c0c(021)c(019)c(09)c(019)c(0c)cc000c00c0cc00c0c(04)c(04)c(0f)cc0ccc(0d)c00c0ccc(09)cc00c(04)c(0c)cc0ccc(012)c00c000c000(c4)000c00c0ccc(0a)(c4)(04)cc(0c)ccc0c0c0c0ccc0cc(06)cc00c(012)ccc(0d)(c8)000(c5)00ccc0c0cc(0d)(c8)(010)(c6)0c0(c4)0(c8)(0c)(c9)(014)(c5)000cc0ccc0(c4)(0a)(ca)(010)(c4)0(c12)(0b)cc0ccc0cc(011)(c12)0cc0c(0a)ccc(05)cc00c(010)cc6(c5)6(cc)6(09)ccc0c0c(04)cc(0f)cc6ccc6(c4)6ccc6cc6cc66(09)cc00c0c0(c5)00(c4)000(c9)6c6cc66c6(c8)666(09)cc(07)(c4)0ccc6(c6)6c6c6c6c(65)cc(66)c(66)(09)c(07)c6(c9)6c6cc666ccc(615)(011)(c4)0c6cc6cc6c(6a)2c7(610)(010)(c5)0(c5)(6b)229cc667(6e)(017)cc(67)7(64)299ccc7(64)78(6a)(04)cc(05)c000(c5)(05)(67)(98)cc6c(6a)7(64)(05)cc(06)c00(c7)(67)76(95)(84)7cc660(64)7(67)c(06)cc(06)(c5)(6d)98889800(65)00667(68)cc(06)(c5)(04)cc0(6a)78768868899(04)66066677(67)c(07)(c7)(06)(68)766766767(66)(04)6667867(64)cc(08)(c4)(08)(6f)767(67)000(64)7666(c4)(09)(c7)(06)ccc(65)c(610)000(65)(c4)(0a)(cb)0cc(6d)(07)(66)00066(c5)0011(07)(c10)666c(68)(0a)6(0c)11(0b)(c7)(6d)c6ccc666cc(014)",
    "linkMap": "(029d)30003(037)(35)(037)(35)(036)(36)(036)(37)(035)(37)(035)(37)(018)22(01c)(35)(016)(25)(036)(26)(01d)333(011)(2a)02(01d)33(010)(2c)(030)(26)(036)220(24)(0105)11(03a)11(03d)",
    "linkPal": {
      "1": {
        "title": "Shush, I'll let her sleep now.",
        "page": "Once upon a time, an old forest..."
      },
      "2": {
        "title": "Looks like <em>someone's<\/em> having quite a nap.",
        "page": ""
      },
      "3": {
        "title": "Tickle the creepy owl?<br\/>(You know you want to)",
        "page": "Owly crap!"
      }
    }
  },
  "Owly crap!": {
    "imgMap": "(0708)",
    "linkMap": "(0708)",
    "linkPal": {
      
    }
  },
  "On the road": {
    "imgMap": "(e6)dede(d8)eedde(d4)ee(d8)e(dc)eededddeededee(d9)edde(d10)88(d4)e(d6)e(d7)e(d5)ededdeddde(da)e(d9)(88)(d15)c(d5)e(d9)e(d9)(86)99(89)(d4)c(dd)ede(d9)e(db)89988899(8c)(d7)c(d5)e(d5)e(d13)899(84)9(86)99(85)c(d8)cc(d5)e(d5)ede(d5)cddd8(d4)(811)9888dccdc(db)edde(d7)c(d5)c89d(85)44(94)88988(95)8dddccddc(d6)c(d9)c(d6)cddcc88448944998899888997779ccdccdc(d4)c(d6)eddcddc(d5)ccdccc44898944498499(84)99(75)ccdccc(d4)cdc(db)ccddd(c4)(4b)8449(85)7711f77(c5)d(c7)dcdcdcdddcdcdcd(c4)(4c)844(84)71711cc79cccd(c4)(d5)ccc(d4)cd(c7)(4f)8444871(74)117799(ca)dccddccdcdcdcdcdccc333(49)3388(44)8(98)899(ce)dcd(c7)d(c6)(39)43388844(84)(95)89(c6)6(c7)dcdccd(cf)(3b)844(84)944999(c6)666(c1e)(37)8(45)98944229(c7)666(c9)d(c15)(38)444(94)444e(fa)999(cc)(4d)(c7)(37)4(95)(e4)(f6)eee999(c9)(413)(38)444(94)(ee)9(64)(c5)(4c)(311)(45)(ef)ccc(64)ccc(48)344(315)(44)(ea)(c7)ff99cc(46)344344(3c)4(36)43(45)e(ce)(f5)ccc(4a)(3b)(4f)f(cd)(f7)(c4)(46)334333(4c)(e8)(f8)(c7)(f9)(c4)(416)(e8)(f19)6(c4)4443(44)3(4a)ccc(e7)ffe(f16)c6(c4)(4b)(ca)(e7)ffe(f16)556(c4)(47)(ce)(e7)fee(f16)556(c7)44(c10)(ec)(f12)(65)",
    "linkMap": "(05d)22(037)(28)(02f)(211)(02a)(214)(028)(214)(022)2(04)(215)(022)200(25)00(2f)(024)22002220(2f)(026)(25)00220(2d)(02c)20020(2b)(02c)200(2d)(02c)2000(2d)(02b)22(04)(2c)(02b)22200(2b)(02e)200(2a)(02e)2(05)(28)(034)(27)(036)(25)(037)(24)(01f1)11(03a)11(03d)",
    "linkPal": {
      "1": {
        "title": "Honestly?<br\/>I miss the forest.",
        "page": "Once upon a time, an old forest..."
      },
      "2": {
        "title": "Boooorn to be wiiiiiild !",
        "page": "And the road goes on and on"
      }
    }
  },
  "And the road goes on and on": {
    "imgMap": "(0708)",
    "linkMap": "(0708)",
    "linkPal": {
      
    }
  }
}

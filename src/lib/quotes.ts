export interface Quote {
  text: string
  by: string
}

/** Ladebildschirm-Zitate: gemeinfreie Weisheiten, Tavernen-Sprüche und augenzwinkernde Abwandlungen. */
export const QUOTES: Quote[] = [
  { text: 'Alea iacta est – der Würfel ist gefallen.', by: 'Gaius Julius Caesar, vermutlich mit einem W20' },
  { text: 'Fortes fortuna adiuvat – den Tapferen hilft das Glück. Und ein Inspirationswürfel.', by: 'Terenz, ergänzt' },
  { text: 'Nicht weil es schwer ist, wagen wir es nicht, sondern weil wir es nicht wagen, ist es schwer.', by: 'Seneca' },
  { text: 'Es ist nicht wenig Zeit, die wir haben, sondern viel, die wir nicht nutzen.', by: 'Seneca' },
  { text: 'Carpe diem. Carpe noctem. Carpe den Samstagabend.', by: 'Horaz, frei erweitert' },
  { text: 'Ich weiß, dass ich nichts weiß. Deshalb würfle ich auf Geschichte.', by: 'Sokrates, Intelligenz 8' },
  { text: 'Wissen ist Macht. Aber eine 20 auf Arkane Kunde ist schneller.', by: 'Francis Bacon, zugeschrieben' },

  // Tavernen-Weisheiten
  { text: 'Eine Runde noch.', by: 'jeder von euch, um 3 Uhr nachts' },
  { text: 'Teilt euch nicht auf.', by: 'Erste Regel jeder Heldengruppe' },
  { text: 'Wir teilen uns auf.', by: 'Jede Heldengruppe, fünf Minuten später' },
  { text: 'Ich durchsuche die Leiche.', by: 'Der Schurke, noch bevor sie umgefallen ist' },
  { text: 'Kann ich mit ihm schlafen?', by: 'Der Barde, über den Drachen' },
  { text: 'Wer „Vielleicht“ sagt, hat seinen Rettungswurf schon halb verpatzt.', by: 'Alte Tavernenweisheit' },
  { text: 'Eine Truhe in einem leeren Raum ist niemals nur eine Truhe.', by: 'Erfahrungswert, teuer bezahlt' },
  { text: 'Der beste Zeitpunkt für einen D&D-Abend war vor 20 Jahren. Der zweitbeste ist Freitag.', by: 'Sprichwort, frei abgewandelt' },
  { text: 'Ich kam, ich sah, ich würfelte eine 1.', by: 'Caesar, sehr frei übersetzt' },
  { text: 'Alle Wege führen in die Taverne. Alle Terminabsprachen führen zu „Vielleicht“.', by: 'Sprichwort, ergänzt' },
  { text: 'Ein leerer Kalender ist ein Dungeon, den nie jemand betreten hat.', by: 'Unbekannter Abenteurer' },
  { text: 'Wer zu spät kommt, den bestraft der Spielleiter. Wer gar nicht kommt, dessen Charakter hält Wache.', by: 'Volksmund, erweitert' },
  { text: 'Der Spielleiter hat nicht gesagt, dass es eine gute Idee ist. Er hat nur gesagt, dass es möglich ist.', by: 'Inschrift über einer Kerkertür' },
  { text: 'Die Geschichte schreiben die Überlebenden. Den Termin schreibt, wer zuerst im Kalender war.', by: 'Volksmund, angepasst' },
  { text: 'Wer mit Goblins verhandelt, sollte vorher die Taschen zunähen.', by: 'Händlergilde von Graufurt' },
  { text: 'Auch ein Drache war einmal ein kleines Ei, das niemand ernst genommen hat.', by: 'Drachenhüterin Ysra' },

  // Völliger Quatsch: frei erfundene und absichtlich absurde Zitate
  { text: 'Scheiß mich an und piss mich sauber.', by: 'Ein Zwerg, nach dem dritten Fass' },
  { text: 'Hätte ich gewusst, dass es Goblins gibt, hätte ich mehr Stühle gekauft.', by: 'Napoleon Bonaparte' },
  { text: 'Die Pyramiden waren eigentlich als Dungeon geplant. Dann kamen die Touristen.', by: 'Kleopatra' },
  { text: 'Ich denke, also bin ich. Vielleicht. Ich trag mich mal mit „Vielleicht“ ein.', by: 'René Descartes' },
  { text: 'Gott würfelt nicht. Er lässt den Spielleiter hinter dem Schirm würfeln.', by: 'Albert Einstein' },
  { text: 'Sein oder nicht sein – das ist ein Weisheitsrettungswurf.', by: 'William Shakespeare' },
  { text: 'Man muss sich Sisyphos als glücklichen Menschen vorstellen, der den Stein zum zwölften Mal auf Fallen untersucht.', by: 'Albert Camus' },
  { text: 'Der Mensch ist, was er isst. Ich bin demnach zu 80 Prozent Reiseproviant.', by: 'Ludwig Feuerbach' },
  { text: 'Wasser ist nass. Aber nur, wenn man auf Wahrnehmung würfelt.', by: 'Thales von Milet' },
  { text: 'Mehr Licht! Und einen Zauber „Licht“ bitte, die Fackel ist aus.', by: 'Johann Wolfgang von Goethe' },
  { text: 'Das Rad ist überbewertet. Ich rolle lieber. Initiative.', by: 'Aristoteles' },
  { text: 'Tschüssikowski.', by: 'Der Erzmagier, bevor er sich wegteleportiert' },

  // Coole Zitate, vom User vorgegeben; Autoren frei erfunden (außer Bussacat)
  { text: 'Ich glaub mein Schwein pfeift Lapaloma.', by: 'Ein Halbling, beim ersten Blick auf den Drachenhort' },
  { text: 'Hömma, is das richtig geil?', by: 'Ein Zwergenkönig, bei der Eröffnung der Mithrilmine' },
  { text: 'DAT IS HEIß DU AFFENJUNGE', by: 'Ein Feuermagier, beim Weiterreichen des Feuerballs' },
  { text: 'ICH GEB DEM DING GLEICH NE KOPFNUSS', by: 'Ein Barbar, vor einer verschlossenen Truhe' },
  { text: 'Lak, ich komm in diese Taverne rein … die Taverne FULL … FULL', by: 'Ein reisender Barde, Reisetagebuch, Band 3' },
  {
    text: 'Weh mi bad man friend dem from labbantil and all dem bad places yah, WEH DI MAN DEM, WEH CAN DEFEND DEMSELVES',
    by: 'Bussacat',
  },

  // Ausm Pott: Zeche, Schacht und Steigerlied, aber mit Zwergen
  { text: 'Glück auf, Glück auf, die Zwerge komm’!', by: 'Steigerlied, Unterreich-Fassung' },
  {
    text: 'Und er hat sein helles Licht bei der Nacht schon angezündet. Ich hab nich ma Dunkelsicht.',
    by: 'Steigerlied, aus Sicht eines Menschen im Unterreich',
  },
  { text: 'Wat is dat denn fürn Dungeon? Da passt ja nich ma ne Lore durch.', by: 'Zwergischer Bauaufseher, bei der Abnahme' },
  { text: 'Ers ma Schicht im Schacht. Dann Drachen hauen.', by: 'Ein Zwergenkrieger, nach der Frühschicht' },
  { text: 'Der Pott kocht. Der Kessel der Hexe übrigens auch.', by: 'Ein Alchemist aus Gelsenkirchen' },
  { text: 'Mach ma die Kaue auf, ich komm direkt ausm Unterreich.', by: 'Ein Tiefengnom, Schichtwechsel' },
  { text: 'Pommes Schranke und ne lange Rast.', by: 'Ein Paladin, anne Bude in Bottrop' },
  { text: 'Vonne Kohle im Stollen zum Gold im Hort – dat nennt man Abenteuer.', by: 'Ein Zwergenkaufmann, Wanne-Eickel' },
]

# VVO Abfahrtszeiten
Dieses Modul ist für die Verwendung unter **mirrOS_beta_075** gedacht (siehe www.glancr.de). Es funktioniert **nicht** mit dem künftigen **mirros_one!**

Das Modul ermöglicht die Anzeige aller Abfahrtszeiten für **eine frei wählbare Haltestelle** im Verkehrsverbund Oberelbe. Die Ansicht auf dem Spiegel sieht so aus:

![Modulansicht](https://github.com/cmette/mirrOS_vvo/blob/master/assets/ReadmeImage1.png "VVO Abfahrten - Ansicht Frontend")

# Installation
Kommt demnächst noch...

# Backend
Die Seite für die Modul-Konfiguration (auch Backend genannt) erreicht man nach dem Setup des mirrOS. Dort können bestimmte Einstellungen für das Modul vorgenommen werden. Der Dialog für die Konfiguration sieht ungefähr so aus:

![Modulansicht](https://github.com/cmette/mirrOS_vvo/blob/master/assets/ReadmeImage2.png "VVO Abfahrten - Ansicht Backend")

Unmittelbar nach der Installation muss das Modul am Backend konfiguriert werden. Daher werden am Frontend noch keine Abfahrten angezeigt. Wählen Sie am Backend im DrpDown-Menü eine Haltestelle aus. Sie müssen dazu mindestens **3 Zeichen** in das Textfeld eingeben, damit Ihnen die ersten Treffer angezeigt werden.
Wenn Sie eine Haltestelle ausgewählt haben, werden unmittelbar danach die ersten Abfahrten für diese Haltestelle am Frontend angezeigt.

# Probleme
Da das Modul für größere Bahnhöfe durchaus mehrere Abfahrten anzeigen kann, ist es möglich, dass die Liste bis in das nächste Modul, das unterhalb platziert wurde, hineinreicht. Aus diesem Grund wird empfohlen, das Modul in "halber Breite" darzustellen und bei einer langen Liste den Modul-Platz darunter einfach frei zu lassen. Im obigen Screenshot ist das Problem auf diese Weise gelöst. Ich arbeite an einer besseren Lösung.


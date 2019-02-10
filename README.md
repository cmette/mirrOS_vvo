# VVO Abfahrtszeiten
Dieses Modul ist für die Verwendung unter **mirrOS_beta_075** gedacht (siehe www.glancr.de). Es funktioniert **nicht** mit dem künftigen **mirros_one!**

Das Modul ermöglicht die Anzeige aller Abfahrtszeiten für **eine frei wählbare Haltestelle** im Verkehrsverbund Oberelbe. Die Ansicht auf dem Spiegel sieht so aus:
![Modulansicht](https://github.com/cmette/mirrOS_vvo/blob/master/assets/ReadmeImage1.png "VVO Abfahrten - Frontend")

# Backend
Die Seite für die Modul-Konfiguration (auch Backend genannt) erreicht man nach dem Setup des mirrOS. Dort können bestimmte Einstellungen für das Modul vorgenommen werden. Die Konfiguration sieht ungefähr so aus:
![Modulansicht](https://github.com/cmette/mirrOS_vvo/blob/master/assets/ReadmeImage2.png "VVO Abfahrten - Backend")

# Probleme
Da das Modul für größere Bahnhöfe durchaus mehrere Abfahrten anzeigen kann, ist es möglich, dass die Liste bis in das nächste Modul, das unterhalb platziert wurde, hineinreicht. Aus diesem Grund wird empfohlen, das Modul in "halber Breite" darzustellen und bei einer langen Liste den Modul-Platz darunter einfach frei zu lassen. Im obigen Screenshot ist das Problem auf diese Weise gelöst. Ich arbeite an einer besseren Lösung.


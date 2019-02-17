# VVO Abfahrtszeiten
Dieses Modul ist für die Verwendung unter **mirrOS_beta_075** gedacht (siehe www.glancr.de). Es funktioniert **nicht** mit dem künftigen **mirros_one!**

Das Modul ermöglicht die Anzeige aller Abfahrtszeiten für **eine frei wählbare Haltestelle** im Verkehrsverbund Oberelbe. Die Ansicht auf dem Spiegel sieht so aus:

![Modulansicht](https://github.com/cmette/mirrOS_vvo/blob/master/assets/ReadmeImage1.png "VVO Abfahrten - Ansicht Frontend")

# Installation
Am einfachsten lässt sich das Modul direkt von der Website https://glancr.de/module/mobilitaet/verkehrsbetriebe/ installieren. Sollte es dort noch nicht gelistet sein, dann können Sie die das Modul als ZIP-Datei [hier](https://github.com/cmette/mirrOS_vvo/blob/master/vvo-1.0.3.zip) herunterladen. **Speichern** Sie die ZIP-Datei an einem Ort Ihrer Wahl, **navigieren** Sie in Ihrem Browser zum **Backend** des mirros_beta, **laden** Sie dort die ZIP-Datei **hoch**, **platzieren** Sie das Modul in einem Slot.

# Backend
Die Seite für die Modul-Konfiguration (auch Backend genannt) erreichen Sie nach dem Setup des mirrOS. Dort können bestimmte Einstellungen für das Modul vorgenommen werden. Der Dialog für die Konfiguration sieht ungefähr so aus:

![Modulansicht](https://github.com/cmette/mirrOS_vvo/blob/master/assets/ReadmeImage2.png "VVO Abfahrten - Ansicht Backend")

Unmittelbar nach der Installation muss das Modul am Backend noch **konfiguriert** werden. Daher werden am Frontend nicht sofort  Abfahrten angezeigt. Wählen Sie am Backend im Textfeld (DropDown-Liste) eine Haltestelle aus. Sie müssen dazu mindestens **3 Zeichen** in das Textfeld eingeben, damit Ihnen die ersten Treffer angezeigt werden.
Wenn Sie eine Haltestelle ausgewählt haben, werden unmittelbar danach die ersten Abfahrten für diese Haltestelle am Frontend angezeigt. Zurzeit zeigt das Modul die **nächsten 15 Abfahrten** ab "jetzt" ("jetzt" ist die lokale Zeit des mirrOS).
Unter dem Textfeld für die Haltestelle können Sie die Anzeige auf das von Ihnen bevorzugte Verkehrsmittel **einschränken**. Ist hier **keine** der Checkboxen ausgewählt, werden **alle** verfügbaren Verkehrsmittel an diesem Halt aufgelistet.
Unter der Einschränkung der Verkehrsmittel befindet sich eine Option. Hier können Sie auswählen, ob Sie die aktuellen Verspätungen in **Echtzeit** sehen wollen. Die Anzeige wird alle 60s aktualisiert.

# Probleme
Da das Modul für größere Bahnhöfe durchaus mehrere Abfahrten anzeigen kann, ist es möglich, dass die Liste bis in das nächste Modul, das unterhalb platziert wurde, hineinreicht. Aus diesem Grund **wird empfohlen**, das Modul in "halber Breite" darzustellen und bei einer langen Liste den Modul-Platz darunter einfach frei zu lassen. Im obigen Screenshot ist das Problem auf diese Weise umgangen. Ich arbeite an einer besseren Lösung.

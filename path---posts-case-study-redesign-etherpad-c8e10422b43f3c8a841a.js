webpackJsonp([0xe1954d3fcbe8],{404:function(e,n){e.exports={data:{site:{siteMetadata:{title:"Logrinto Blog",subtitle:"Blog zum Interaction Designer an der Schule für Gestaltung Zürich",author:{name:"Logrinto",twitter:"https://twitter.com/logrinto"}}},markdownRemark:{id:"/home/travis/build/logrinto/website/src/pages/articles/2018-06-02—CaseStudy-Nextpad/index.md absPath of file >>> MarkdownRemark",html:'<h2>Intro</h2>\n<p>Kollaboratives Arbeiten mittels Software bietet viele Chancen für verteilte Gruppen, sich trotz räumlicher Distanz zu ergänzen oder am selben Ort gleichzeitig einen Effort zu leisten. Die Opensource-Software <a href="http://etherpad.org/">Etherpad</a> bietet hierzu einen einfachen Einstieg, wenn es um Texterstellung geht. Doch ist das freie Produkt für gewisse Anforderungen fast zu einfach gestrickt.</p>\n<h3>Struktur</h3>\n<p>Etherpad kann beim installieren verschieden konfiguriert werden. So hilft es zum Beispiel für strukturierte Texte dem Benutzer die Möglichkeit zu geben, Titel einzufügen. Für andere Bereiche bietet die Software dem Benutzer keine visuelle Hilfe, sondern der Text dient als universelle «Schnittstelle».</p>\n<div class="wide-grid bg">\n  <div class="col-1to6">\n    <figure>\n      \n  <span class="gatsby-resp-image-wrapper" style="position: relative; display: block; ; max-width: 3000px; margin-left: auto; margin-right: auto;">\n    <span class="gatsby-resp-image-background-image" style="padding-bottom: 70%; position: relative; bottom: 0; left: 0; background-image: url(&apos;data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAOCAYAAAAvxDzwAAAACXBIWXMAAAsSAAALEgHS3X78AAACQ0lEQVQ4y42TC0/aUBiG+f9/ZdElS5ZNo3HzMtyiFMFyEWyh0EJbSu83oH12qGLUkcUvefKdJj1v37ffOTXTtFg6PpbpYOgm2njKbGZiGHMsa8Fy6eE4LkEQEMfxG5IkwfM88c6ywjRH1PS5TvuxRWvY4kEbMLMt/CDGWfos3YClF1TrPF+zq7IsX3hftYk1ojNpYFsaqeeS+i7rKCITpGFAIpylYVj1SLiJff+N0GvxLTXdHXHS+szJ9QGK0iYXGzLfIxE9EDEqXJfwma3oTvC9WCVoegbqokvfkFEslThfsS4gX/8b53Xti1tFnpoaD3oby7PQ7ZDxfIFmLjDEerXebHfudfLe5YvgeKbSGNXpTCXc2CbIXOEy4CO1dyh99Z7T2wPO777QU8VwnDHmQkSPHMpVRpFlbLJtzymzVUUeJ6zFr9k38Zqi9Kn/PqJ+fcxl/SsXP8/4cXpOrzFgIovzqIwxxv0KTXxcU2XcuUES7VK8nXhNGU+4uG3zS5KpN7tc3/Vpqk0awxsUUxWDGtA2GnS0rjjcKaEgiSAJEUeofKZglW2eHOq6jSwbyB2dbnfG8HGOG9l4sbglkYUTmMzcKfO5OPB2jGdH2LNMUAoKLGPbV6RR/iSoTgdI40uk0QWqLVzkSyEoxEIbxxfXMlzw0aoi90b3fGt84rt0wFX7iE7nVjhziIuUaB0TrCLRE+J1+l/S4tnhcNrjuHnIkXTIn+4Zzd4VrdEN8kRC1qQq7qbcUJSF6EXVd7x+9gOfNE35C0kqJ2sqteeIAAAAAElFTkSuQmCC&apos;); background-size: cover; display: block;">\n      <img class="gatsby-resp-image-image" style="width: 100%; height: 100%; margin: 0; vertical-align: middle; position: absolute; top: 0; left: 0; box-shadow: inset 0px 0px 0px 400px white;" alt="test" title="" src="/static/example03-15c1eede6e0ece850c0467d248621d47-df0a4.png" srcset="/static/example03-15c1eede6e0ece850c0467d248621d47-6a4f1.png 750w,\n/static/example03-15c1eede6e0ece850c0467d248621d47-f4d1d.png 1500w,\n/static/example03-15c1eede6e0ece850c0467d248621d47-df0a4.png 3000w" sizes="(max-width: 3000px) 100vw, 3000px">\n    </span>\n  </span>\n  \n      <figcaption>Installation von Etherpad ohne Titel-Optionen</figcaption>\n    </figure>\n  </div>\n  <div class="col-7to12">\n    <figure>\n      \n  <span class="gatsby-resp-image-wrapper" style="position: relative; display: block; ; max-width: 3000px; margin-left: auto; margin-right: auto;">\n    <span class="gatsby-resp-image-background-image" style="padding-bottom: 70%; position: relative; bottom: 0; left: 0; background-image: url(&apos;data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAOCAYAAAAvxDzwAAAACXBIWXMAAAsSAAALEgHS3X78AAACJ0lEQVQ4y42TC3OaUBCF+f+/pTNtp0ltM2kS3yYxkxeCggoqAvJQBPER0a83dtK82+zMmbOXOyy75yyS63qMBh5u32HQsehrJq5p45hDnJ5NMBT3fRff8vGHAbMkIU3THRKRh+MxURQxFix3dSTbCih/Ual/kyl8bpHfa1PY06l+73Dx0xQwOMsZ1PYF/+gxT1bcx3a73eFlSJMwYO5ZLNwB04mPs1phLeYs+Vg8FH1gKfIc6tVLcsUuR1WD3OEtJ5Uuh6U2B3mF44ro+tQQrJPOn3f3FiTXsSlX6hyXNApVjeOyQqHW4VexSUPtYfYGeEHMbL7mYcK3Rv07su972HaNaHxNNFEEt5iEKpOxQhioOHYfb2Tj+0PiOPqnfn80nMSMnAt6xifMbo5u+wi9VUaRL9DUOmrjiqvLOp12k6XQ9r8FwzAkXqZMBeLljGQVC0525+nunD57ebPZPDPiZWHJdi1qjX3OlH0qN185VQ6o3BYp3xQoXuc5vS0T2jah5ZAE3it3X3UYeD4DWcZVhF6KsuOhrGM3dJHr4pmGea3QvVIwb8R9u8PdYvF+h6Evdk/TsNQmdqsl8iZWU0BtYCmyYAHxoUfITD3v3fWRgiAgy+6ENmvWgrNsTSbyjy70y8LSSOhj1c+xzmu0S3mMShGjWiINxqzFIm+yjO29EU/xuJBvjTxm2Dhnaor/dDhlNghJrQmRMSIeBKLA9l0TnrodxzHL5ZLfGNMg4ubCoWYAAAAASUVORK5CYII=&apos;); background-size: cover; display: block;">\n      <img class="gatsby-resp-image-image" style="width: 100%; height: 100%; margin: 0; vertical-align: middle; position: absolute; top: 0; left: 0; box-shadow: inset 0px 0px 0px 400px white;" alt="test" title="" src="/static/example01-32edb7160afce943ace462e26727dd82-df0a4.png" srcset="/static/example01-32edb7160afce943ace462e26727dd82-6a4f1.png 750w,\n/static/example01-32edb7160afce943ace462e26727dd82-f4d1d.png 1500w,\n/static/example01-32edb7160afce943ace462e26727dd82-df0a4.png 3000w" sizes="(max-width: 3000px) 100vw, 3000px">\n    </span>\n  </span>\n  \n      <figcaption>Installation von Etherpad welche Titel erlaubt</figcaption>\n    </figure>\n  </div>\n</div>\n<h2>Probleme</h2>\n<p>So vielfältig wie die Anwendungen, so divers sind auch die Probleme mit Etherpad. Die Nachfolgenden Probleme wurden für den durchgeführten Tag in den Fokus genommen:</p>\n<ul>\n<li>Persönliche, für andere nicht sichtbare Kommentare/Dokumente/Notizen müssen ausserhalb von Etherpad erfasst werden und können dem Dokument nicht im Kontext mitgegeben werden. Persönliche Anreicherung des Dokuments soll möglich sein. Die Lösung, die für dieses Problem gefunden wird, sollte auch für öffentliche (also für Alle sichtbare) Anreicherungen funktionieren.</li>\n<li>Aus dem Text resultierende Aufgaben sind nicht ohne den Text vertieft zu lesen ersichtlich und es gibt keine Fortschrittsanzeige über bereits erledigte Aufgaben.</li>\n</ul>\n<h2>Analyse</h2>\n<p>Nach einer kurzen Einführung wurde von den Studierenden eine Analyse zu bereits bestehenden Software Produkten gemacht, welche dann im Kollektiv besprochen wurden.</p>\n<h3>Analysierte Produkte</h3>\n<ul>\n<li><a href="https://www.dropbox.com/paper">Dropbox Paper</a></li>\n<li><a href="https://hackmd-ce.herokuapp.com/">HackMD</a></li>\n<li><a href="https://github.com/ianstormtaylor/slate/issues">Github Issues</a></li>\n<li><a href="https://www.atlassian.com/software/confluence">Atlassian Confluence</a></li>\n</ul>\n<h3>Dropbox Paper</h3>\n<ul>\n<li>Starke Kommentarfunktion (einzelne Wörter oder Zeilen können kommentiert werden)</li>\n<li>ToDo’s können direkt im Dokument vergeben werden – Nutzer werden benachrichtigt.</li>\n<li>Möglichkeiten zum Einfügen weiterer Inhalte (Bilder, Tabellen, …) sind sehr gut integriert.</li>\n</ul>\n<h3>HackMD</h3>\n<ul>\n<li>Eingabe erfolgt mittels der Auszeichnungssprache Markdown</li>\n<li>Für normale Benutzer schwierig in der Anwendung</li>\n<li>Direkte Integration mit GitHub um mittels <a href="https://gist.github.com/">Gist</a> Daten (privat) zu speichern</li>\n<li>Keine Kommentarfunktion</li>\n<li>Integration verschiedenster Dienste für Video/Slideshows/Bilder</li>\n<li>Automatische Navigationserstellung (Table of Content)</li>\n</ul>\n<h3>Confluence</h3>\n<ul>\n<li>Kostenpflichtig</li>\n<li>Funktioniert am besten mit anderen Produkten von <a href="https://www.atlassian.com/">Atlassian</a> (Jira &#x26; Confluence)</li>\n<li>Keine Kommentarfunktion direkt im Confluence (Kommentare müssen im Jira hinzugefügt werden)\n– Keine privaten Kommentare</li>\n</ul>\n<h3>Github Issues</h3>\n<ul>\n<li>Keine Echtzeit-Editierung mit anderen Personen</li>\n<li>Ein Repository beinhaltet «Issues»</li>\n<li>Über Issues können Aufgaben erstellt werden</li>\n<li>Personen und Teams können zu Issues zugewiesen werden</li>\n<li>Issues sind in Milestones zusammengefasst (mit Fortschrittsanzeige)</li>\n<li>Milestones können terminiert werden</li>\n<li>Issues können nach Milestones und Labels sortiert werden</li>\n</ul>\n<h2>Redesign</h2>\n<h3>Entwurf «Fokus»</h3>\n<p>Severin, Nicole und Matthias haben einen <a href="https://xd.adobe.com/view/8f4b8631-affd-40d3-67a1-60f145ddacdc-f97a/">Entwurf</a> erarbeitet, bei dem der Fokus zentral auf dem Text liegt und die Userinterface-Elemente sind nur kontextsensitiv zu sehen.</p>\n<div class="wide-grid bg">\n  <div class="col-1to12">\n    <figure>\n      \n  <span class="gatsby-resp-image-wrapper" style="position: relative; display: block; ; max-width: 1920px; margin-left: auto; margin-right: auto;">\n    <span class="gatsby-resp-image-background-image" style="padding-bottom: 56.25%; position: relative; bottom: 0; left: 0; background-image: url(&apos;data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAALCAYAAAB/Ca1DAAAACXBIWXMAAAsSAAALEgHS3X78AAABtElEQVQoz4WS6W6DMBCE8/4v1R9VlDaqqiakOQpSA3YIaQ4w92GY7jqpmqsq0siA7fG34+0ppXA4HBBFEeI4NkrTFLvdDtvtFjyPtgXqGh2NHYCu69A0DXzfh+u6x71JYtb2fkxY/INHPmAwGKDf7+N5OIQ9mWBO3850isXHB/z1Gl1dIZI+yqZFXVXm8CzLfg3Z7MeQx9lshvl8DsuyMBqPMV0sYDuO+SekhM5zJJ9LfO33SGhPQoRFUaB3bRSbyRgObbZt25zK4hK11kYtlazLEjlTkUlO8zVFYgglncZ5nVMmSQopV/A8QRl55r0oyICoON+KSmwpT3UVl8lwT8j3CN0llzdBGG7R6pJMmKIyJCytG1qrbvL/I8MQ47dHvL48YPr+BOFaCPwFNpsAQbChC9hD1xmiWCLOiDxLwWBcwUWGRylT1nq9QVkyCTfK7cPUWSzwReZcEV+IMbzXNjw6jk3ZiZMkhGfDW47gflrGoGsrhMpHmpeIwpAID5dtc27KhEEQQAhxkjSmK8nvHjWyIsKC2oWaWmVI6RLZ7IaQxV3Pt/jfo5scVe7TWk0qTTux4TcCf0Opd+HmAwAAAABJRU5ErkJggg==&apos;); background-size: cover; display: block;">\n      <img class="gatsby-resp-image-image" style="width: 100%; height: 100%; margin: 0; vertical-align: middle; position: absolute; top: 0; left: 0; box-shadow: inset 0px 0px 0px 400px white;" alt="test" title="" src="/static/comment-4883de4fea73ae8f1a857e1ecca83278-aa339.png" srcset="/static/comment-4883de4fea73ae8f1a857e1ecca83278-91ed2.png 750w,\n/static/comment-4883de4fea73ae8f1a857e1ecca83278-2ec08.png 1500w,\n/static/comment-4883de4fea73ae8f1a857e1ecca83278-aa339.png 1920w" sizes="(max-width: 1920px) 100vw, 1920px">\n    </span>\n  </span>\n  \n      <figcaption>Kommentarfunktion</figcaption>\n    </figure>\n  </div>\n  <div class="col-1to12">\n    <figure>\n      \n  <span class="gatsby-resp-image-wrapper" style="position: relative; display: block; ; max-width: 1920px; margin-left: auto; margin-right: auto;">\n    <span class="gatsby-resp-image-background-image" style="padding-bottom: 56.25%; position: relative; bottom: 0; left: 0; background-image: url(&apos;data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAALCAYAAAB/Ca1DAAAACXBIWXMAAAsSAAALEgHS3X78AAABnUlEQVQoz4WT626CQBCFef+X6o/G2JqmqWLxAkkFFuQmCHhBRE5nRmlttSnJySyQ+Th7dtDyPEeapliv1yiKQrTZbJAkCeI4Br/H6QTUNVqqLYC2benRSXoOh4Osm4ZEVesgLG7myh/o9/vo9Xp4HgxgjseY0r1lGJjN5/B9HyeCxlmGdLXCdrtFtd9jt9t9AxnWAblOJhNMp1Pouo7haARjNoNpWfLMdV0cj0cozxN4GIYidqz9BnEtywIWNZumKV9nMaBpGtF5i43EwhBWRm65X1NKyYtrl2W5gVIeHMeFbTuy3u8r2RLnK7kRkDPmeMqy/IpNW1EG9xzaC97emL4cU3NFkC2dy4FUi44E9IIAy6WPtZgoRX9kmGH09ojXlwcY709wbR2BP6OcAgRBiISc1RRBlKwQR5G47Jz+yPCsXLa1XIaoqpqy4kG5vXhEAgJHUYiUT7sD3hsbrpZlUnbuRQquY8JZDGF/6NSYE7AVYHaZYT6UG2AHY4cB5cPjcZYSqKd47QiATzqm/BnE93cdsrrp/+/iv+V63ekT2iZDMSm6TucAAAAASUVORK5CYII=&apos;); background-size: cover; display: block;">\n      <img class="gatsby-resp-image-image" style="width: 100%; height: 100%; margin: 0; vertical-align: middle; position: absolute; top: 0; left: 0; box-shadow: inset 0px 0px 0px 400px white;" alt="test" title="" src="/static/task-c524f64c55172c64a0aaf0e58b7e9bcf-aa339.png" srcset="/static/task-c524f64c55172c64a0aaf0e58b7e9bcf-91ed2.png 750w,\n/static/task-c524f64c55172c64a0aaf0e58b7e9bcf-2ec08.png 1500w,\n/static/task-c524f64c55172c64a0aaf0e58b7e9bcf-aa339.png 1920w" sizes="(max-width: 1920px) 100vw, 1920px">\n    </span>\n  </span>\n  \n      <figcaption>Aufgabenverwaltung</figcaption>\n    </figure>\n  </div>\n</div>\n<h4>Positives</h4>\n<ul>\n<li>Klares Interface-Konzept</li>\n<li>kontextsensitive Formatierung</li>\n<li>Inhaltsverzeichnis hilft beim Navigieren im Dokument</li>\n<li>Taskverwaltung sehr ausgefeilt</li>\n<li>Gute Sichtbarkeit von Public/Private in Kommentaren</li>\n</ul>\n<h4>Inputs/Verbessern</h4>\n<ul>\n<li>Die Erstellung von Kommentaren und Aufgaben ist noch nicht gezeigt (Ansicht schon).</li>\n<li>Farbsystem für Kommentare (nebst Avatar) allenfalls auch für Aufgaben nutzen.</li>\n</ul>\n<h4>Übersicht</h4>\n<p>★★★★★ – Technik<br>\n★★★★<span class="star half">☆</span> – Inhalt<br>\n★★★★<span class="star half">☆</span> – Interaktion/Führung<br>\n★★★★<span class="star half">☆</span> – Konzept</p>\n<h2>Redesign</h2>\n<h3>Entwurf «Sidebar»</h3>\n<p>Der Entwurf von Nils, Lars, Marius, Natasha basiert auf einem Sidebar, der sich für Kommentare, Dateien und Aufgaben nutzen lässt. Die Erstellung erfolgt mit einem Layover direkt im Text.</p>\n<div class="wide-grid bg">\n  <div class="col-1to6">\n    <figure>\n      \n  <span class="gatsby-resp-image-wrapper" style="position: relative; display: block; ; max-width: 2880px; margin-left: auto; margin-right: auto;">\n    <span class="gatsby-resp-image-background-image" style="padding-bottom: 71.11111111111111%; position: relative; bottom: 0; left: 0; background-image: url(&apos;data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAOCAYAAAAvxDzwAAAACXBIWXMAAAsSAAALEgHS3X78AAAB1klEQVQ4y5WTy27aQBSG87RZ9AWSTbvoOg8TUrGI2mTVbhCJuEbGgG/4Sm1sKcYYX+bvnIExWKKtMtIvY+b4O/85Z+ZK1d6wsJZYWgYW+hKqvsDM0rC0TZiBA9N3Ds//yPBsKPocV2AAYww1q9EsRn/iY4vHJ3HCgXzleQ7DMBCGITabDcqqOnLZh0TfCmCWZej1erBtG9vtFnVdN0F/NXS2J2PjOD45VFUVaZq2gum53+9RFEXLiUxIeyQZ2wDJ4WAwwGg0gq7rQpZliQTk2nEcAal4K6TonfbPTTRAKpOA5JI0n88xm83g+77Yk20oy7IFJZ1X0wB3u51wN5lMBJBckUMaEjkgh9QWWZ5c0rUEkoEGOBwOhStN07BareC6LpIkEXvkOE23HCh7eQKSJDCKotNQFEURIM/zRCYSlVBWNd45LOewoqzEu1DJ+LB42XV1ueTpdCpKpSx0nshdFIUIfYtSkp/D6T2qqgLssuB4AS4cm/F4DNM0hTPX9eDxkv1gja/fc3zqMNw+Al+egM8/gBv++7qT4e5nDlZfGAqdMwkjdyF3GYa/uSI8jwPc9zx867vokl48dF8DPPTX+KXErR4K4L9uw6HzNFkudiZIFa3bQsA/2Kwu8J3Fs0IAAAAASUVORK5CYII=&apos;); background-size: cover; display: block;">\n      <img class="gatsby-resp-image-image" style="width: 100%; height: 100%; margin: 0; vertical-align: middle; position: absolute; top: 0; left: 0; box-shadow: inset 0px 0px 0px 400px white;" alt="test" title="" src="/static/comment_add-ce062d54aa0458332bb5e96ca2f33c7d-3ac57.png" srcset="/static/comment_add-ce062d54aa0458332bb5e96ca2f33c7d-a1ccb.png 750w,\n/static/comment_add-ce062d54aa0458332bb5e96ca2f33c7d-d84eb.png 1500w,\n/static/comment_add-ce062d54aa0458332bb5e96ca2f33c7d-3ac57.png 2880w" sizes="(max-width: 2880px) 100vw, 2880px">\n    </span>\n  </span>\n  \n      <figcaption>Kommentar einf&#xFC;gen</figcaption>\n    </figure>\n  </div>\n  <div class="col-7to12">\n    <figure>\n      \n  <span class="gatsby-resp-image-wrapper" style="position: relative; display: block; ; max-width: 2880px; margin-left: auto; margin-right: auto;">\n    <span class="gatsby-resp-image-background-image" style="padding-bottom: 71.11111111111111%; position: relative; bottom: 0; left: 0; background-image: url(&apos;data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAOCAYAAAAvxDzwAAAACXBIWXMAAAsSAAALEgHS3X78AAACZUlEQVQ4y5WTy27aQBiF84Bd9SG67cP0Cbrool2gqlKaRFWkJI26QBEQLgEbjO/GeHy/4Au2T2fGAaKqUdUfH3nGHj7OzH84E9dPWGkSJE3BSpYgyisI2hqSoULdmlBts7v/RfJG59IcC4ptQFAknKEF2rZF0zY4Vsse4p8VeD4810UUhgh8H87WoUBaRVFAURS49KVPX+zr+pnbvi76MYiD5XIJy7LgeR5s2+6Au90O/X4fhmHwMbV7dPoakJUkyhgOB3Ao2PM9bB375FAURaRpyhcW1CFT3TxvvX15Gp07dsnTNdZzGXmYI/ET+GZ4cjgcDTEdTzCQBNyoM9zqT7ByD/u2QF7vECcxyrLgMH7e9AqUGKIggtgOTEtDsIk7YJZlGI1GWK6WmA8WGPZmmHwTsbzSYdy6IA8JsP+jIxSYRRl0U4Msy9ANHamXdcA8zzEejzGdTSHMBahzA7/ub3D+/TMur3r4cf0Vdw/n+Dm4wP3wEneDc9iOiX3awDANqIrG72VUnYCPj48QBIH+2hrGhi4yaRb1BdaGSHO6gEbnQUzgUwUJQVWWqLMGru/C3lpwXII0LE5NWSwW0HUdm82Gt584dKtbl2aL8LFLWN5iFHlJ15d8y0VU8u6GYYAojrA7AJnD2WzGY8PyxLIYBAEfH+aEEERRRBtTcjFgTgFlVR6PtUrqk8PJZAJVVbk7FlTm1DTN45yFnsWKJYIpzwrssy5Pdd3wZFVJ2wGrqjrCmBvmigGYXrpkCunfjMWnLCqkJERTJc9BzZD7Ac4Oqf+fOnzjw3WFNx9rvOsBbz+VeP8lw28kcyGZ2XxviQAAAABJRU5ErkJggg==&apos;); background-size: cover; display: block;">\n      <img class="gatsby-resp-image-image" style="width: 100%; height: 100%; margin: 0; vertical-align: middle; position: absolute; top: 0; left: 0; box-shadow: inset 0px 0px 0px 400px white;" alt="test" title="" src="/static/comment_overview-2463bf7bd2a3e1b551b39df9f5ff6a34-3ac57.png" srcset="/static/comment_overview-2463bf7bd2a3e1b551b39df9f5ff6a34-a1ccb.png 750w,\n/static/comment_overview-2463bf7bd2a3e1b551b39df9f5ff6a34-d84eb.png 1500w,\n/static/comment_overview-2463bf7bd2a3e1b551b39df9f5ff6a34-3ac57.png 2880w" sizes="(max-width: 2880px) 100vw, 2880px">\n    </span>\n  </span>\n  \n      <figcaption>Kommentare anzeigen</figcaption>\n    </figure>\n  </div></div>\n<div class="col-1to12">\n    <figure>\n      \n  <span class="gatsby-resp-image-wrapper" style="position: relative; display: block; ; max-width: 2880px; margin-left: auto; margin-right: auto;">\n    <span class="gatsby-resp-image-background-image" style="padding-bottom: 71.11111111111111%; position: relative; bottom: 0; left: 0; background-image: url(&apos;data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAOCAYAAAAvxDzwAAAACXBIWXMAAAsSAAALEgHS3X78AAACW0lEQVQ4y52T227aQBRF85v9i/5If6HveYmqSrSJqkhJmvYhSQPhErCxAd/vBhvjGV+Y3ZmBQFSlqtQjbc2MjbbXnLM5UWfP0EwdurmANtehzjUo5gy6bcAIHBi+s1vf0Nyzuaz93sJ4NsUJGMAYw5ZtcSgmHuKftVoukcQJUq44iuE6LjfkRSnFYrFAHMdI0xRN2+592d/F32uGCU3TsOTGYRTA9faGZVni7u4Otm3LPcc9kL5ttnvvLUJoU01C+KGLLM+OhKqqoigK+UPKCYXa7f7q7HU3dqaihIGA8IMA2ZqAEHIk7Pa6GPYHeNQVXBkjXFvPcEmChlGQtkS+zlFVVNLt+s2Q52ukyRKUVPIDdVPvDDebDXq9HqbaFOPHCbpnIww+q5heWLCvY0QPa6D5YyIcsiQFCpKh2pZoWYO6bnaGArXf72M4GkIZKzDGNn7eXqHz5RTnF2f4dvkJNw8dfH/8itvuOW5+dRAmHspqDX+tIyYGiioFKenR8OnpCYqiYD6fweb5MhyeRWuCma3ynE5g8vMyj5ByibVuKmlASX3oMa3ocSiTyQSWZcHzPPi+jyjkVw1ihEEk9yJn2SqX/apojS0fGKU8EUxErJU9qCk5Eo5GIzmxJElkDES2xP7lHEURsoz3q6qkRKTcMIWbFMgp4OcFrCg8Eg4GAxiGIelc15WkjuMcziL0IlYiEcWGk7UEH+8bvDsF3nfAV4YP1/sr13V9MBM0gkoYCL2mFFqtVhKg4RGJ4w3mZoyZ5cH0ErhBgpOXkP5P6dE9hvoP2PwvmK3ElDf4DRlkIynofIzhAAAAAElFTkSuQmCC&apos;); background-size: cover; display: block;">\n      <img class="gatsby-resp-image-image" style="width: 100%; height: 100%; margin: 0; vertical-align: middle; position: absolute; top: 0; left: 0; box-shadow: inset 0px 0px 0px 400px white;" alt="test" title="" src="/static/task_overview-55b95e1f019401c1a0226c706407d023-3ac57.png" srcset="/static/task_overview-55b95e1f019401c1a0226c706407d023-a1ccb.png 750w,\n/static/task_overview-55b95e1f019401c1a0226c706407d023-d84eb.png 1500w,\n/static/task_overview-55b95e1f019401c1a0226c706407d023-3ac57.png 2880w" sizes="(max-width: 2880px) 100vw, 2880px">\n    </span>\n  </span>\n  \n      <figcaption>Aufgaben anzeigen</figcaption>\n    </figure>\n  </div>\n\n<h4>Positives</h4>\n<ul>\n<li>Klares Interface-Konzept</li>\n<li>kontextsensitive Formatierung</li>\n<li>Inhaltsverzeichnis hilft beim Navigieren im Dokument</li>\n<li>Taskverwaltung sehr ausgefeilt</li>\n<li>Gute Sichtbarkeit von Public/Private in Kommentaren</li>\n</ul>\n<h4>Inputs/Verbessern</h4>\n<ul>\n<li>Public und Private ist mit dem Schiebeschalter nicht 100% verständlich, was jedoch hier sehr wichtig ist. Allenfalls beser ein Dropdown.</li>\n<li>Tasks sind im Text nich ersichtlich (bei Kommentaren mit Farbe gelöst).</li>\n<li>Filterung von Aufgaben/Kommentaren visuell noch zu sehr wie ein Link.</li>\n<li>drei verschieden Symboliken (segmentierter Kreis, Balken in Anzahl Schritten, Balken in Prozent) für Fortschrittsanzeige wohl nicht ideal.</li>\n<li>Sehr lange Zeilen im Text. Allenfalls maximale Breite beschränken.</li>\n<li>Der eingeklappte Sidebar animiert nicht aufgemacht zu werden, da man nicht sieht, was sich dahinter verbirgt. Allenfalls gleich drei Icons für Kommentare, Files und Aufgaben dort einführen. Klick darauf öffnet gleich im richtigen Tab.</li>\n</ul>\n<h4>Übersicht</h4>\n<p>★★★★★ – Technik<br>\n★★★<span class="star half">☆</span>☆ – Inhalt<br>\n★★★<span class="star half">☆</span>☆ – Interaktion/Führung<br>\n★★★★☆ – Konzept</p>\n<h3>Entwurf «Trennung»</h3>\n<p>Tiö, Wolfgang und Marc haben ein Entwurf gemacht, bei dem sie die Trennung von öffentlichen und privaten Ergänzungen sehr klar getrennt haben. So sind die Notizen immer privat und die Kommentare immer öffentlich.</p>\n<div class="wide-grid bg">\n  <div class="col-1to12">\n    <figure>\n      \n  <span class="gatsby-resp-image-wrapper" style="position: relative; display: block; ; max-width: 1440px; margin-left: auto; margin-right: auto;">\n    <span class="gatsby-resp-image-background-image" style="padding-bottom: 62.5%; position: relative; bottom: 0; left: 0; background-image: url(&apos;data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAANCAYAAACpUE5eAAAACXBIWXMAAAsTAAALEwEAmpwYAAAC20lEQVQ4y5WT2W8TVxjF/W/07+BP6mv7hNTHVDxA1YVKqEUgsZSiQhKgNg4JixITIM7iJF4yiT2e3Vsdxx57vGDPeIl/vXegQqgPVa90dO/ckc73nXO+G+F/rulkwoGqsHGU4sKNi3xx9UuuvHhAWTMplUpERqMRs9mMer3OYDBgPp9zfn7+GeTdTOxy+eOA6FGSa++eci+TIFFIc2flMdF36yR1hUiz2SQIAnRdR9M0SraDbVpYpon5EZZliX8Fel6Hjv8eq1UnGI+ZMscN3lMdtDkddUmfOURkB9PpFNu2KQpCpVhAUfPkCifohhHeG2Iv5rdxGyaeP0JtVql5Lapdl7rAaVcQei65U0EoZUhJvu8zCnwafY+zfodGr8NkNv2Xh91gyFIqwR9bL4kX91kx08T1Q+LGYXgOCWWXtVqNSrmM22rhT8Yhed8f4gs7pAIpUVSmF4y49GaZr9du88v+c547OZ45WZ7ZAlbmA6EMxXBsNCHNFBJzmkpWSM8U8+F3rVLFEd4ORWhdUeS7rSd8u7XMzfQr0eUBi+kk0eMdYoW9D4RTQZivVDh2HEplk2rJoOLo/FWrYJRsVMsgb+qcie5lh/der3P/7SZLSopldZuH2RhxdZdVI/NJsud5dNptWg2DZj1P8zRPv+fS7vdoem0awnRfyO6Nh3y/tMaVxTV+fJvgeirOrdRlHikJYuo+ERmIRFuQjYPxfw52V4zNb8mX/L67zmMhMaYfsJRNsCLIVs1/PBSmm5aJZgoPyw6H+gn72jFZQyVnquRtI3wFg16f/mTIz3++5odHCX5KbvFr6il3s5d4om6KtEXKLdcNKxe0IjtHafaUrECG7dwhxwURipzBYhFVVWm33DCU+3sveJjeIHqSJK4d8CCVJKbsCB9TRGKxWEgox0X62BXwOp3wLGdzLHyTL0mOD+fzsMOFG2t8c22FhY03XN1d5u7JV0SNTVZthb8BWeSlart8NLoAAAAASUVORK5CYII=&apos;); background-size: cover; display: block;">\n      <img class="gatsby-resp-image-image" style="width: 100%; height: 100%; margin: 0; vertical-align: middle; position: absolute; top: 0; left: 0; box-shadow: inset 0px 0px 0px 400px white;" alt="test" title="" src="/static/task_edit-3e9489abc88a9d54d4aea74618fff2a2-2c9dc.png" srcset="/static/task_edit-3e9489abc88a9d54d4aea74618fff2a2-ec30b.png 750w,\n/static/task_edit-3e9489abc88a9d54d4aea74618fff2a2-2c9dc.png 1440w" sizes="(max-width: 1440px) 100vw, 1440px">\n    </span>\n  </span>\n  \n      <figcaption>Aufgaben einf&#xFC;gen</figcaption>\n    </figure>\n  </div>\n  <div class="col-1to12">\n    <figure>\n      \n  <span class="gatsby-resp-image-wrapper" style="position: relative; display: block; ; max-width: 1440px; margin-left: auto; margin-right: auto;">\n    <span class="gatsby-resp-image-background-image" style="padding-bottom: 62.5%; position: relative; bottom: 0; left: 0; background-image: url(&apos;data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAANCAYAAACpUE5eAAAACXBIWXMAAAsTAAALEwEAmpwYAAACzElEQVQ4y4WT7U5iVxiFuY3eSO+lv3sB/dfMDTRp+j1Nm9jaOpnROonaAApjjR0dZwoyIHAQOJxvQKxTQUBAD4cPffru48Sk06R9k5Wzs3+ss9Z6147wztzy3zObTikYVV6U87z/w8e89+WHfLK9TMO0aTQaRHzfZz6fc3Z2xtVoKIy33Nzc/AO3cjeXr5rxZMJiapMHiUU+O1jnt0qOJ8kk8T/2SNllIu12myAIsCyLkuNwfHKC4Xl4cnbewnVdTFNn0OsymPp8G9/l+809FnMZlo53+UVfIGqniNkFIkrBbDbDExLdNMWOjlaroukVLMcO7235GnqazhuL0TTg4WaCz3+N8VMhzXLlBevmupBl2HKKRMLcxFIwHuMHY86HPc4HPf4STOezf2XY90c8Tj/jUeoZK2J3wyiQ9CpsuUVB/o5QqTw9PaXZbHLR6TCeTvAnAaPAl8yC0EEg2amNDYJrNsopVgsHrOqKMCdER2w6eVFYuCNUS6nX63eZiUXNMigqSG5O3eNUcq17da6GI4YTnzXtJY8Od3hSzrFWy4XKFKHCPWGr1QoVnjRdWg2Lk7rJn60mdrNOzbOpuhbnol4RbmivWM0+52kpLdmJMrdwj3vL/X6Pbq9H59yl/aZC+6zCcNCmK1Vqq0wvu2EUg/E1H/3+mA8S3/FpJkZSbEatLDErFyKiFqLQ7XaZBBP+b9RSfj5MsJTbZq38kriZYzl9QFRLEa+9fmtZQndcB1Pq4YjFI6tC1ixTtGtojkHVu3sFo8GQofTwx919Fnb2WdIyrFT3WbeeEndfk/A0Ip2Li/DPummQLuXJHBcFBVLaEWW9imNLBw0DvVaj27lgMLnm6+g2X8V2+ObVHgvZBIuHX7BWek5UzxKJRqMhoapLv9/nUtCXLNV5LN2cSF3US1JQz/JyfMVKdofV/C4JO0vS1dgoHbEl207Igv4Gk4GhEMR51uMAAAAASUVORK5CYII=&apos;); background-size: cover; display: block;">\n      <img class="gatsby-resp-image-image" style="width: 100%; height: 100%; margin: 0; vertical-align: middle; position: absolute; top: 0; left: 0; box-shadow: inset 0px 0px 0px 400px white;" alt="test" title="" src="/static/task_view-f88a4dc7115ba282410df9e56610021c-2c9dc.png" srcset="/static/task_view-f88a4dc7115ba282410df9e56610021c-ec30b.png 750w,\n/static/task_view-f88a4dc7115ba282410df9e56610021c-2c9dc.png 1440w" sizes="(max-width: 1440px) 100vw, 1440px">\n    </span>\n  </span>\n  \n      <figcaption>Aufgaben anzeigen</figcaption>\n    </figure>\n  </div>\n  <div class="col-1to6">\n    <figure>\n      \n  <span class="gatsby-resp-image-wrapper" style="position: relative; display: block; ; max-width: 1440px; margin-left: auto; margin-right: auto;">\n    <span class="gatsby-resp-image-background-image" style="padding-bottom: 62.5%; position: relative; bottom: 0; left: 0; background-image: url(&apos;data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAANCAYAAACpUE5eAAAACXBIWXMAAAsTAAALEwEAmpwYAAAChElEQVQ4y3VTa1PaUBTkd7Z/q187+qXTxwdn1IJSH9WqxVIHqWISAnkTyENIIIEkkGR77gUdO2Mzs7knmcmePbsnFfznKstygwJFUdCbgr9fZSa8/lvE9huMrGMMbQXOSISp38G2RFTiOEae57BtG9PpdPPxaw0YMZ1FDEs/x9hrocw1lCsNxVIFcp26PaDi+z6yLIMsy5AkCbqm4brRwEGthpPjGi5O32Fr6z2azSaCICTSBdLwA1bRDpH0iEQgiEQsoshuUWFjMYWGYaBLpPddET9vfuPovI7Lix20m59wdnYEQRDh+2PkqwiK9BFG/zO8YRXTxzpCf41k9h2VJ7/SJEGSpnBnASaLCEESvzo6IxzoVXh2HY+jOnyG4SGv0/hiTch8sywLuq7Dc1zEyQLRYo4wnmGezJFRoyRNaJKSE5rKLpwBU3eCJPpBys45UqqfCQ0iU3o9KKqCtiSgJXbQEu7Rp2dTN6CpKnnIQothEOHIrMIdHBBqcKwar5MnwpwIBVJ4S4F0yUubass0MRoO0TM0iGofgtrD0PO4wiGRPY4OEU1OuaqXWCskD4MwxDgIMJ5MMNmArRQbezwN4U8nmKcZXxtT3YNtfOWqPPLPtdfncn65TpnBc10s5vP1zm2Q052hfBHKajnjIcwmJ1hMz5BREE94VsjWRqdRZaWPvq7hRn7AL+keLVlAuyeio3QpMI3Uh1yh1PmCLmGg7XMvbX2f0j4ElteoOI7DOwtdCVftGzT+tHB91+J1RxKhKgpfelnuwvV8ah7RL1fF2Kk/J8sRr1HZ3t7mhAH5F81m/4DtZrZcIqW1ybKUwitR5Gxt9sjHXe7d2P3GdzDwj1FmDfwF0TTB4DRgDhMAAAAASUVORK5CYII=&apos;); background-size: cover; display: block;">\n      <img class="gatsby-resp-image-image" style="width: 100%; height: 100%; margin: 0; vertical-align: middle; position: absolute; top: 0; left: 0; box-shadow: inset 0px 0px 0px 400px white;" alt="test" title="" src="/static/notes-3be878cafd6c5396d0c8b170eb843171-2c9dc.png" srcset="/static/notes-3be878cafd6c5396d0c8b170eb843171-ec30b.png 750w,\n/static/notes-3be878cafd6c5396d0c8b170eb843171-2c9dc.png 1440w" sizes="(max-width: 1440px) 100vw, 1440px">\n    </span>\n  </span>\n  \n      <figcaption>Notizen einf&#xFC;gen</figcaption>\n    </figure>\n  </div>\n  <div class="col-7to12">\n    <figure>\n      \n  <span class="gatsby-resp-image-wrapper" style="position: relative; display: block; ; max-width: 1440px; margin-left: auto; margin-right: auto;">\n    <span class="gatsby-resp-image-background-image" style="padding-bottom: 62.5%; position: relative; bottom: 0; left: 0; background-image: url(&apos;data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAANCAYAAACpUE5eAAAACXBIWXMAAAsTAAALEwEAmpwYAAACaUlEQVQ4y5WTbW/aMBSF+f37uF+A1A+bqmmaNmlSu24dW6u+qEW8NIljJ3ag0AHpCAHyBknOrg2tqn5bpAfHYJ177vWhgf98sqIAkxJyNIIcj/EwneIbvb9xHLwVAo31eo2yLDGmH+M4RlVVZr8lynKLqiyI3R51jYzWcxJscRfOcgm13cKnInrVNMIwREFfcM7BGIPyJXzPg+CaHhQ/gydsuC7HI53dksvDlsD7UwGRZUZM4+U5fKJRU1XtaDAYwCXRHrMNHecOwveglILv+4ZwNkNKZ1vCw3cq3l/EcEmEpSkYiWsaei5aNKdNlmeYrSI8rmOEqwVKav/1QwPAu1MHB8cWnCSFR22KzeYZI6jnNhqNyeUQs2mIhISXaULCK8RZipxaysiJnqWe4Ynl4qhrw17Gpm1ODp/YCdIhJRm424fn2egyC9d2H6dWD7eegAwCBFJhMY+wQY3PVwIfzxjYagW5Kczsnma5F9xiqNpQ4gqBf4vRcID74T0mDw/wBgqO9GBLgT+zCfKqxJdrC58u+rApFYJcuUkCvud5hnG8RBTFmJOL+Xxu0JGK1kv8jRcI4wgpjaKoK/ywBzjuKSMQ0LgUdRjsMbesmVJAUzpgCuwp6VNTv7gU7fDDbxuHPy0wKugm6926xzjUsQkoNpxi4gUKN9zCFeujzSk+wsGd7yKgOUbkOidHLdfHSZ+ZlrU7Sbf7RGMymZjKtstw3rnBRbeNy17bvN8xB5Lyp0OvMzqjLjYUm4OjLppfO3uHybM747DZbBrBKIqwor/SS3Q2C6qa0y3q6NTVLjaXgcQvTsEmx8Erh/8ASRvK7/uVQfcAAAAASUVORK5CYII=&apos;); background-size: cover; display: block;">\n      <img class="gatsby-resp-image-image" style="width: 100%; height: 100%; margin: 0; vertical-align: middle; position: absolute; top: 0; left: 0; box-shadow: inset 0px 0px 0px 400px white;" alt="test" title="" src="/static/comments-900140e683c56f511f652fd5452abca8-2c9dc.png" srcset="/static/comments-900140e683c56f511f652fd5452abca8-ec30b.png 750w,\n/static/comments-900140e683c56f511f652fd5452abca8-2c9dc.png 1440w" sizes="(max-width: 1440px) 100vw, 1440px">\n    </span>\n  </span>\n  \n      <figcaption>Kommentare</figcaption>\n    </figure>\n  </div>\n</div>\n<h4>Positives</h4>\n<ul>\n<li>Klare Trennung von privaten und öffentlichen Ergänzungen</li>\n<li>Kontextsensitives Formatieren und Einfügungen von Ergänzungen</li>\n<li>Inhaltsverzeichnis hilft beim Navigieren im Dokument</li>\n</ul>\n<h4>Inputs/Verbessern</h4>\n<ul>\n<li>Man müsste im Interface trotzdem noch einmal erklären, dass Notizen privat und Kommentare öffentlich sind (da sehr wichtig nicht zu verwechseln).</li>\n<li>Visuell hätte man im Text für Tasks wohl noch mehr Infos anzeigen können. Siehe Entwurf «Fokus»</li>\n<li>Durchgängige Bezeichnungen verwenden (Post it &#x26; Speichern)</li>\n<li>Hauptverantwortlicher und Benutzer in Ansicht nicht unterschieden (ausser Position)</li>\n<li>Muss man das Abhacke von Teilaufgaben wirklich speichern?</li>\n<li>Unterschiedliche Symbolik/Interface-Elemente für das hinzufügen von Personen und Teilaufgaben ungünstig</li>\n<li>Teils noch Fehler in den Mockups (Beispiel: beim erstellen der Aufgabe können nicht schon Teilaufgaben erledigt sein)</li>\n</ul>\n<h4>Übersicht</h4>\n<p>★★★<span class="star half">☆</span>☆ – Technik<br>\n★★★☆☆ – Inhalt<br>\n★★★<span class="star half">☆</span>☆ – Interaktion/Führung<br>\n★★★★☆ – Konzept</p>\n<h2>Fazit</h2>\n<p>An dieser Case Study ist der Unterschied von UX- und UI-Design exemplarisch erkennbar. Der Fokus lag klar auf dem UX-Design, sprich wie der User durch die Anwendung geführt werden soll. Selbstverständlich hat das Interface-Design auch seine Berechtigung, doch wird dieses weiter hinten angesiedelt. Erst muss klar sein, was die Applikation leisten soll und in einem zweiten Schritt geht es stärker um gestalterische Themen wie Typografie, Farbe usw. Schön zu sehen, was innerhalb eines Tages für Resultate vorliegen. Alle Gruppen haben eine Basis erarbeitet, auf welcher man gut weiterarbeiten kann. Zu gegebenem Zeitpunkt wäre sicher ein Usertest ein gewinnbringender Schritt – von Vorteil in möglichst frühem Statium mittels eines Prototypes oder Klickdummys. So kann festgestellt werden, wie der Enduser mit der Applikation zurecht kommt und wo er stoplert. Letztendlich liegt der Erfolg einer Applikation sowohl im Konzept als Genzes, wie auch im Kleinen, was Microinteracions und dergleichen anbelangt. Das Spielfeld des Interaction Designs ist gross…</p>\n<p>Danke an Matthias Koch fürs mitschreiben der Analyse.</p>',fields:{tagSlugs:["/tags/case-study/","/tags/interface/","/tags/typografie/"]},frontmatter:{title:"Texteditor – Redesign Etherpad",author:"Michael Scherrer-Kast & Stefan Huber",category:"Case Study",tags:["Case Study","Interface","Typografie"],date:"2018-06-02",description:"Bei der Case Study im Sommer 2018 wurden in einem intensiven Arbeitstag Entwürfe erarbeitet, wie die bestehende Software Etherpad um weitere Funktionen ergänzt werden kann und wie das User-Interface zu erweitern wäre.",featuredImage:{childImageSharp:{sizes:{base64:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAHCAIAAACHqfpvAAAACXBIWXMAAAsSAAALEgHS3X78AAABI0lEQVQY03WQv07DMBDGu7BVSAgh8RosLLwBbwAjEwtPUOAFygoDT4BYWFKpHTKENG2HVipiCFJIJCTUVEprJ86dHadtgtM/akDi9Bts333nu6+C/wXnPM8VKCUCAOJMPQghEWFTUllXIqacF6gDQCJTJJPg5X76VJcf/WSe5Zw/U3oxHncAMsS4LGYAXhS5CsY+EX0yAfd99Fjz7i6dN9MB4Ye0HgTHrqtHkWrEVuJiHiEcQg40rdpo7PW6O1b35uG2d370enVqXJ8dtlpVTdvV9f1m82Q4VOtgeWx1o4hWGJphaDFmTMnXt8fsAbUHxO53/JEJYMWxQUibMbas/7tzxvka5UqS8tlcpAULkWSrrBCL0rdbMS493KLc3QC/U+X4AYZOdmpyx64hAAAAAElFTkSuQmCC",aspectRatio:3,src:"/static/header-366aab25d18c18981de0ea21cb2301b9-ef3a8.png",srcSet:"/static/header-366aab25d18c18981de0ea21cb2301b9-e0a0e.png 750w,\n/static/header-366aab25d18c18981de0ea21cb2301b9-0bb6d.png 1500w,\n/static/header-366aab25d18c18981de0ea21cb2301b9-ef3a8.png 3000w",sizes:"(max-width: 3000px) 100vw, 3000px"}}}},wordCount:{words:980}}},pathContext:{slug:"/posts/case-study-redesign-etherpad/"}}}});
//# sourceMappingURL=path---posts-case-study-redesign-etherpad-c8e10422b43f3c8a841a.js.map
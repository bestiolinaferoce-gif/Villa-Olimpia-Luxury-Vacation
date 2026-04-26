from __future__ import annotations

from dataclasses import dataclass
from pathlib import Path
from typing import Iterable

from reportlab.lib import colors
from reportlab.lib.pagesizes import A4
from reportlab.lib.styles import ParagraphStyle, getSampleStyleSheet
from reportlab.lib.units import cm
from reportlab.pdfbase.pdfmetrics import stringWidth
from reportlab.platypus import (
    BaseDocTemplate,
    Frame,
    Image,
    KeepTogether,
    PageBreak,
    PageTemplate,
    Paragraph,
    Spacer,
    Table,
    TableStyle,
)
from reportlab.platypus.flowables import Flowable


ROOT = Path("/Users/francesconigro/Documents/New project/Villa-Olimpia-Luxury-Vacation-clean")
OUTPUT_PDF = ROOT / "PROPOSTA_VILLA_OLIMPIA_EMANUELE_BELLONI_14_24_LUGLIO_2026.pdf"


@dataclass(frozen=True)
class Lodge:
    name: str
    floor: str
    size: str
    guests: int
    bedrooms: int
    bathrooms: int
    night_rate: int
    total_price: int
    headline: str
    description: str
    pluses: tuple[str, ...]
    features: tuple[str, ...]
    image: Path
    detail_image: Path


NIGHTS = 10
STANDARD_RATE = 129
FRANGIPANE_RATE = 139

LODGE_DATA: tuple[Lodge, ...] = (
    Lodge(
        name="Frangipane",
        floor="Piano Terra",
        size="45 mq",
        guests=6,
        bedrooms=2,
        bathrooms=1,
        night_rate=FRANGIPANE_RATE,
        total_price=FRANGIPANE_RATE * NIGHTS,
        headline="La soluzione piu spaziosa per chi desidera due vere camere matrimoniali.",
        description=(
            "Frangipane e il lodge piu generoso tra quelli disponibili per il periodo richiesto. "
            "Si trova al piano terra e offre due camere matrimoniali reali, una zona living con divano letto, "
            "cucina completa e veranda privata arredata. E una proposta molto comoda per famiglie o piccoli gruppi "
            "che cercano piu spazio, una gestione semplice delle giornate e un alloggio pratico da vivere."
        ),
        pluses=(
            "Due camere matrimoniali reali",
            "Veranda privata arredata",
            "Capienza fino a 6 ospiti",
            "Ottimo equilibrio tra spazi interni ed esterni",
        ),
        features=(
            "Cucina completa",
            "Zona living con divano letto",
            "Aria condizionata",
            "WiFi gratuito",
            "TV Smart",
            "Biancheria inclusa",
            "Prodotti bagno",
            "Vicino a piscina e spazi comuni",
        ),
        image=ROOT / "public/images/villa/appartamenti/frangipane/Frangipane_Veranda_Giorno_01.jpg",
        detail_image=ROOT / "public/images/villa/appartamenti/frangipane/Frangipane_Camera_01.jpg",
    ),
    Lodge(
        name="Fiordaliso",
        floor="Piano Terra",
        size="50 mq",
        guests=4,
        bedrooms=1,
        bathrooms=1,
        night_rate=STANDARD_RATE,
        total_price=STANDARD_RATE * NIGHTS,
        headline="Una soluzione luminosa e funzionale, molto comoda per coppie e famiglie 2+2.",
        description=(
            "Fiordaliso si trova al piano terra e si distingue per la sua organizzazione semplice e piacevole. "
            "Dispone di camera matrimoniale, zona living con divano letto, cucina attrezzata e affaccio verso la piscina. "
            "E una scelta pratica per chi desidera muoversi con facilità tra spiaggia, piscina e aree esterne della villa."
        ),
        pluses=(
            "Balcone con vista piscina",
            "Distribuzione molto funzionale",
            "Ideale per coppie e famiglie 2+2",
            "Accesso comodo ai servizi della struttura",
        ),
        features=(
            "Camera matrimoniale",
            "Cucina attrezzata",
            "Bagno con doccia",
            "Aria condizionata",
            "WiFi gratuito",
            "TV Smart",
            "Giardino condiviso",
            "Area barbecue",
        ),
        image=ROOT / "public/images/villa/appartamenti/fiordaliso/Fiordaliso_Gazebo_Giorno_02.jpg",
        detail_image=ROOT / "public/images/villa/appartamenti/fiordaliso/Fiordaliso_Living_Cucina_01.jpg",
    ),
    Lodge(
        name="Tulipano",
        floor="Piano Terra",
        size="47 mq",
        guests=4,
        bedrooms=1,
        bathrooms=1,
        night_rate=STANDARD_RATE,
        total_price=STANDARD_RATE * NIGHTS,
        headline="Comodo, immediato e molto adatto a chi vuole vivere bene anche gli spazi esterni.",
        description=(
            "Tulipano e un lodge al piano terra con camera matrimoniale, zona living con divano letto, cucina completa "
            "e patio privato. L'accesso diretto al giardino e la vicinanza alla piscina lo rendono particolarmente interessante "
            "per famiglie con bambini o per ospiti che preferiscono una soluzione facile da vivere in ogni momento della giornata."
        ),
        pluses=(
            "Patio privato",
            "Accesso diretto al giardino",
            "Vista piscina",
            "Ottima vivibilita per famiglie 2+2",
        ),
        features=(
            "Camera matrimoniale",
            "Zona living con divano letto",
            "Cucina completa",
            "Bagno con doccia",
            "Aria condizionata",
            "WiFi gratuito",
            "TV Smart",
            "Ingresso comodo e spazi esterni immediati",
        ),
        image=ROOT / "public/images/villa/appartamenti/tulipano/Tulipano_Living_Cucina_03.jpg",
        detail_image=ROOT / "public/images/villa/appartamenti/tulipano/Tulipano_Camera_01.jpg",
    ),
    Lodge(
        name="Orchidea",
        floor="Piano Terra",
        size="48 mq",
        guests=4,
        bedrooms=1,
        bathrooms=2,
        night_rate=STANDARD_RATE,
        total_price=STANDARD_RATE * NIGHTS,
        headline="La proposta piu confortevole tra i lodge standard grazie ai doppi servizi.",
        description=(
            "Orchidea e una soluzione molto interessante per chi cerca piu comfort nel soggiorno. "
            "Si trova al piano terra e offre camera matrimoniale, zona living con divano letto, cucina completa e due bagni. "
            "I doppi servizi rappresentano un plus molto concreto per coppie e famiglie che desiderano organizzare meglio i tempi della giornata."
        ),
        pluses=(
            "Due bagni",
            "Zona living luminosa",
            "Comfort superiore nella gestione del soggiorno",
            "Molto adatta a coppie e famiglie 2+2",
        ),
        features=(
            "Camera matrimoniale",
            "Divano letto in living",
            "Cucina completa",
            "Aria condizionata",
            "WiFi gratuito",
            "TV Smart",
            "Biancheria inclusa",
            "Accesso rapido a piscina e mare",
        ),
        image=ROOT / "public/images/villa/appartamenti/orchidea/Orchidea_Living_Cucina_01.jpg",
        detail_image=ROOT / "public/images/villa/appartamenti/orchidea/Orchidea_Camera_01.jpg",
    ),
    Lodge(
        name="Gardenia",
        floor="Primo Piano",
        size="52 mq",
        guests=4,
        bedrooms=1,
        bathrooms=2,
        night_rate=STANDARD_RATE,
        total_price=STANDARD_RATE * NIGHTS,
        headline="Una proposta luminosa al primo piano, ideale per chi cerca una vista piu aperta e comfort superiore.",
        description=(
            "Gardenia si trova al primo piano ed e pensata per ospiti che apprezzano ambienti luminosi, maggiore apertura visiva "
            "e un soggiorno rilassato vicino al mare. Offre camera matrimoniale, zona living con divano letto, cucina attrezzata "
            "e due balconi con vista mare Ionio. La presenza di due bagni aggiunge un livello di comodita molto concreto per soggiorni di piu notti."
        ),
        pluses=(
            "Primo piano",
            "Due balconi con vista mare Ionio",
            "Due bagni",
            "Atmosfera luminosa e ariosa",
            "Ottima scelta per coppie e famiglie 2+2",
        ),
        features=(
            "Camera matrimoniale",
            "Zona living con divano letto",
            "Cucina attrezzata",
            "Due bagni",
            "Aria condizionata",
            "WiFi gratuito",
            "TV Smart",
            "Accesso alla piscina condivisa",
        ),
        image=ROOT / "public/images/villa/appartamenti/gardenia/main.jpg",
        detail_image=ROOT / "public/images/villa/appartamenti/gardenia/Gardenia_Camera_01.jpg",
    ),
)


AMENITIES = (
    ("Mare", "Spiaggia dei Gigli raggiungibile a piedi in circa 1 minuto, a meno di 100 metri dalla villa."),
    ("Spiaggia", "Possibilita di convenzioni per lettini e ombrelloni presso i lidi convenzionati di Spiaggia dei Gigli."),
    ("Piscina", "Piscina condivisa con area relax, giardino mediterraneo e spazi esterni curati."),
    ("Servizi", "Mini market a circa 50 metri dalla villa per acquisti di prima necessita."),
    ("Paese", "Capo Rizzuto dista meno di 5 minuti di auto, utile per servizi, passeggiate e piccole esigenze quotidiane."),
)


ATTRACTIONS = (
    ("Spiaggia dei Gigli", "Una delle spiagge piu comode per la villa: sabbia, mare limpido e accesso rapido senza spostamenti complessi."),
    ("Le Castella", "Borgo marinaro molto amato della zona, noto per il Castello Aragonese e il suo forte impatto panoramico."),
    ("Area Marina Protetta", "Il contesto naturale che rende questa parte della costa ionica particolarmente interessante per mare, paesaggio e relax."),
    ("Capo Rizzuto", "Il paese di riferimento nelle immediate vicinanze, comodo per vivere la zona in modo semplice e pratico."),
    ("Capo Colonna", "Meta culturale e paesaggistica facilmente raggiungibile, ideale per arricchire il soggiorno con una tappa nel territorio."),
)

HOST_GUIDE = (
    (
        "Orchidea",
        "Scelta host per comfort",
        "Se per voi conta la comodita quotidiana, Orchidea e la proposta piu equilibrata tra prezzo, vivibilita e doppi servizi.",
    ),
    (
        "Gardenia",
        "Scelta host per luce e vista",
        "Se desiderate una soluzione piu ariosa e con affaccio piu aperto, Gardenia al primo piano con due bagni e una proposta molto convincente.",
    ),
    (
        "Frangipane",
        "Scelta host per spazio",
        "Se volete piu autonomia interna e due vere camere matrimoniali, Frangipane e la soluzione piu generosa tra quelle disponibili.",
    ),
)

LODGE_TAGLINES = {
    "Frangipane": "Due camere matrimoniali e piu spazio da vivere.",
    "Fiordaliso": "Piano terra facile, ordinato e molto pratico.",
    "Tulipano": "Patio, giardino e grande immediatezza negli spazi esterni.",
    "Orchidea": "Il plus dei due bagni fa davvero la differenza.",
    "Gardenia": "Primo piano luminoso con due balconi vista mare e due bagni.",
}

LODGE_FIT = {
    "Frangipane": "Ideale per chi vuole piu spazio e due camere vere.",
    "Fiordaliso": "Ideale per coppie e famiglie 2+2 che cercano praticita.",
    "Tulipano": "Ideale per chi vuole vivere bene patio e giardino.",
    "Orchidea": "Ideale per chi mette il comfort prima di tutto.",
    "Gardenia": "Ideale per chi preferisce piano alto, luce, balconi e doppio bagno.",
}


def euro(value: int) -> str:
    return f"EUR {value:,.2f}".replace(",", "X").replace(".", ",").replace("X", ".")


class BadgeRow(Flowable):
    def __init__(self, badges: Iterable[tuple[str, str]], width: float):
        super().__init__()
        self.badges = list(badges)
        self.width = width
        self.height = 28

    def wrap(self, avail_width, avail_height):
        return self.width, self.height

    def draw(self):
        x = 0
        y = 4
        for label, value in self.badges:
            icon_fill = colors.HexColor("#FF6B6B")
            pill_fill = colors.HexColor("#FFF4F0")
            stroke = colors.HexColor("#FFB38A")
            self.canv.setFillColor(icon_fill)
            self.canv.roundRect(x, y, 18, 18, 6, fill=1, stroke=0)
            self.canv.setFillColor(colors.white)
            self.canv.setFont("Helvetica-Bold", 8)
            self.canv.drawCentredString(x + 9, y + 5.5, label[:1].upper())
            text = f"  {label}: {value}"
            text_width = stringWidth(text, "Helvetica-Bold", 8)
            self.canv.setFillColor(pill_fill)
            self.canv.setStrokeColor(stroke)
            self.canv.roundRect(x + 12, y, text_width + 12, 18, 8, fill=1, stroke=1)
            self.canv.setFillColor(colors.HexColor("#3A3042"))
            self.canv.setFont("Helvetica-Bold", 8)
            self.canv.drawString(x + 18, y + 5.5, text)
            x += text_width + 36


def make_styles():
    styles = getSampleStyleSheet()
    styles.add(
        ParagraphStyle(
            name="CoverKicker",
            fontName="Helvetica-Bold",
            fontSize=11,
            leading=14,
            textColor=colors.HexColor("#FFF6E6"),
            spaceAfter=8,
            tracking=1,
        )
    )
    styles.add(
        ParagraphStyle(
            name="CoverTitle",
            fontName="Helvetica-Bold",
            fontSize=28,
            leading=32,
            textColor=colors.white,
            spaceAfter=10,
        )
    )
    styles.add(
        ParagraphStyle(
            name="CoverText",
            fontName="Helvetica",
            fontSize=12,
            leading=18,
            textColor=colors.HexColor("#FCEFE5"),
        )
    )
    styles.add(
        ParagraphStyle(
            name="SectionTitle",
            fontName="Helvetica-Bold",
            fontSize=18,
            leading=22,
            textColor=colors.HexColor("#233142"),
            spaceAfter=10,
            spaceBefore=8,
        )
    )
    styles.add(
        ParagraphStyle(
            name="SectionEyebrow",
            fontName="Helvetica-Bold",
            fontSize=9,
            leading=12,
            textColor=colors.HexColor("#12A57A"),
            spaceAfter=4,
        )
    )
    styles.add(
        ParagraphStyle(
            name="Body",
            fontName="Helvetica",
            fontSize=10.5,
            leading=15,
            textColor=colors.HexColor("#34495E"),
        )
    )
    styles.add(
        ParagraphStyle(
            name="BodyStrong",
            fontName="Helvetica-Bold",
            fontSize=10.5,
            leading=15,
            textColor=colors.HexColor("#22324A"),
        )
    )
    styles.add(
        ParagraphStyle(
            name="Small",
            fontName="Helvetica",
            fontSize=9,
            leading=13,
            textColor=colors.HexColor("#546A7B"),
        )
    )
    styles.add(
        ParagraphStyle(
            name="CardTitle",
            fontName="Helvetica-Bold",
            fontSize=16,
            leading=19,
            textColor=colors.HexColor("#1E2A39"),
            spaceAfter=4,
        )
    )
    styles.add(
        ParagraphStyle(
            name="CardLead",
            fontName="Helvetica-Bold",
            fontSize=10,
            leading=14,
            textColor=colors.HexColor("#D94862"),
            spaceAfter=6,
        )
    )
    styles.add(
        ParagraphStyle(
            name="Meta",
            fontName="Helvetica-Bold",
            fontSize=8,
            leading=10.5,
            textColor=colors.HexColor("#7C8794"),
            spaceAfter=3,
        )
    )
    styles.add(
        ParagraphStyle(
            name="ProposalBullet",
            fontName="Helvetica",
            fontSize=8.6,
            leading=10.8,
            leftIndent=10,
            bulletIndent=0,
            textColor=colors.HexColor("#2F4858"),
            spaceAfter=1,
        )
    )
    styles.add(
        ParagraphStyle(
            name="Price",
            fontName="Helvetica-Bold",
            fontSize=12.5,
            leading=15,
            textColor=colors.HexColor("#073B4C"),
            alignment=2,
        )
    )
    styles.add(
        ParagraphStyle(
            name="Policy",
            fontName="Helvetica",
            fontSize=10,
            leading=14,
            textColor=colors.HexColor("#263238"),
        )
    )
    styles.add(
        ParagraphStyle(
            name="MiniCaps",
            fontName="Helvetica-Bold",
            fontSize=8.5,
            leading=11,
            textColor=colors.HexColor("#7A8A99"),
        )
    )
    return styles


def make_doc() -> BaseDocTemplate:
    doc = BaseDocTemplate(
        str(OUTPUT_PDF),
        pagesize=A4,
        leftMargin=1.2 * cm,
        rightMargin=1.2 * cm,
        topMargin=1.0 * cm,
        bottomMargin=1.0 * cm,
        title="Proposta soggiorno Villa Olimpia - Emanuele Belloni",
        author="Francesco Nigro - Villa Olimpia",
    )
    frame = Frame(doc.leftMargin, doc.bottomMargin, doc.width, doc.height, id="normal")
    doc.addPageTemplates([PageTemplate(id="main", frames=[frame], onPage=draw_page_number)])
    return doc


def draw_page_number(canvas, doc):
    canvas.saveState()
    canvas.setFont("Helvetica", 8)
    canvas.setFillColor(colors.HexColor("#7B8794"))
    canvas.drawRightString(A4[0] - doc.rightMargin, 0.8 * cm, f"Villa Olimpia  |  Pagina {doc.page}")
    canvas.restoreState()


def info_table(styles):
    data = [
        ["Ospite", "Emanuele Belloni", "Check-in", "14/07/2026"],
        ["Email", "emanuele.belloni11@gmail.com", "Check-out", "24/07/2026"],
        ["Telefono", "3402302151", "Notti", "10"],
        ["Ospiti", "4", "Origine richiesta", "floating_booking_bar"],
    ]
    table = Table(data, colWidths=[2.2 * cm, 6.1 * cm, 2.7 * cm, 5.2 * cm], hAlign="LEFT")
    table.setStyle(
        TableStyle(
            [
                ("BACKGROUND", (0, 0), (-1, -1), colors.white),
                ("INNERGRID", (0, 0), (-1, -1), 0.6, colors.HexColor("#E4D5FF")),
                ("BOX", (0, 0), (-1, -1), 0.8, colors.HexColor("#E4D5FF")),
                ("BACKGROUND", (0, 0), (0, -1), colors.HexColor("#FFF1F8")),
                ("BACKGROUND", (2, 0), (2, -1), colors.HexColor("#F2FBFF")),
                ("TEXTCOLOR", (0, 0), (0, -1), colors.HexColor("#A4135E")),
                ("TEXTCOLOR", (2, 0), (2, -1), colors.HexColor("#0077B6")),
                ("FONTNAME", (0, 0), (-1, -1), "Helvetica"),
                ("FONTNAME", (0, 0), (0, -1), "Helvetica-Bold"),
                ("FONTNAME", (2, 0), (2, -1), "Helvetica-Bold"),
                ("FONTSIZE", (0, 0), (-1, -1), 9.4),
                ("LEADING", (0, 0), (-1, -1), 12),
                ("VALIGN", (0, 0), (-1, -1), "MIDDLE"),
                ("LEFTPADDING", (0, 0), (-1, -1), 8),
                ("RIGHTPADDING", (0, 0), (-1, -1), 8),
                ("TOPPADDING", (0, 0), (-1, -1), 8),
                ("BOTTOMPADDING", (0, 0), (-1, -1), 8),
            ]
        )
    )
    return table


def price_table(styles):
    header = [
        Paragraph("<b>Lodge</b>", styles["Small"]),
        Paragraph("<b>Piano</b>", styles["Small"]),
        Paragraph("<b>Capienza</b>", styles["Small"]),
        Paragraph("<b>Tariffa notte</b>", styles["Small"]),
        Paragraph("<b>Totale 10 notti</b>", styles["Small"]),
    ]
    rows = [header]
    for lodge in LODGE_DATA:
        rows.append(
            [
                Paragraph(f"<b>{lodge.name}</b>", styles["Body"]),
                Paragraph(lodge.floor, styles["Body"]),
                Paragraph(f"{lodge.guests} ospiti", styles["Body"]),
                Paragraph(euro(lodge.night_rate), styles["Body"]),
                Paragraph(f"<b>{euro(lodge.total_price)}</b>", styles["Body"]),
            ]
        )
    table = Table(rows, colWidths=[4.1 * cm, 3 * cm, 2.4 * cm, 3.2 * cm, 3.6 * cm], repeatRows=1)
    table.setStyle(
        TableStyle(
            [
                ("BACKGROUND", (0, 0), (-1, 0), colors.HexColor("#1D3557")),
                ("TEXTCOLOR", (0, 0), (-1, 0), colors.white),
                ("FONTNAME", (0, 0), (-1, 0), "Helvetica-Bold"),
                ("FONTSIZE", (0, 0), (-1, -1), 9.2),
                ("BACKGROUND", (0, 1), (-1, -1), colors.white),
                ("ROWBACKGROUNDS", (0, 1), (-1, -1), [colors.HexColor("#F8FBFF"), colors.HexColor("#FFF8FB")]),
                ("INNERGRID", (0, 0), (-1, -1), 0.6, colors.HexColor("#D7E3F1")),
                ("BOX", (0, 0), (-1, -1), 0.8, colors.HexColor("#D7E3F1")),
                ("LEFTPADDING", (0, 0), (-1, -1), 8),
                ("RIGHTPADDING", (0, 0), (-1, -1), 8),
                ("TOPPADDING", (0, 0), (-1, -1), 9),
                ("BOTTOMPADDING", (0, 0), (-1, -1), 9),
                ("VALIGN", (0, 0), (-1, -1), "MIDDLE"),
            ]
        )
    )
    return table


def lodge_card(lodge: Lodge, styles):
    img_primary = Image(str(lodge.image), width=8.2 * cm, height=3.0 * cm)
    img_secondary = Image(str(lodge.detail_image), width=8.2 * cm, height=3.0 * cm)
    images = Table([[img_primary, img_secondary]], colWidths=[8.3 * cm, 8.3 * cm])
    images.setStyle(
        TableStyle(
            [
                ("LEFTPADDING", (0, 0), (-1, -1), 0),
                ("RIGHTPADDING", (0, 0), (-1, -1), 0),
                ("TOPPADDING", (0, 0), (-1, -1), 0),
                ("BOTTOMPADDING", (0, 0), (-1, -1), 0),
            ]
        )
    )

    top: list[Flowable] = [
        images,
        Spacer(1, 0.08 * cm),
        Paragraph(
            f"<b>{lodge.floor}</b>  |  {lodge.size}  |  {lodge.bedrooms} camera/e  |  {lodge.bathrooms} bagno/i  |  max {lodge.guests} ospiti",
            styles["Meta"],
        ),
        Paragraph(lodge.name, styles["CardTitle"]),
        Paragraph(lodge.headline, styles["CardLead"]),
        Paragraph(lodge.description, styles["Body"]),
        Spacer(1, 0.04 * cm),
    ]

    plus_flow: list[Flowable] = [Paragraph("<b>Plus principali</b>", styles["Body"])]
    for item in lodge.pluses:
        plus_flow.append(Paragraph(item, styles["ProposalBullet"], bulletText="-"))

    dot_flow: list[Flowable] = [Paragraph("<b>Dotazioni</b>", styles["Body"])]
    for item in lodge.features:
        dot_flow.append(Paragraph(item, styles["ProposalBullet"], bulletText="-"))

    features_table = Table(
        [[plus_flow, dot_flow]],
        colWidths=[8.0 * cm, 8.0 * cm],
        hAlign="LEFT",
    )
    features_table.setStyle(
        TableStyle(
            [
                ("VALIGN", (0, 0), (-1, -1), "TOP"),
                ("LEFTPADDING", (0, 0), (-1, -1), 0),
                ("RIGHTPADDING", (0, 0), (-1, -1), 8),
                ("TOPPADDING", (0, 0), (-1, -1), 0),
                ("BOTTOMPADDING", (0, 0), (-1, -1), 0),
            ]
        )
    )

    price_table_local = Table(
        [[Paragraph(f"Tariffa giornaliera<br/><font size=13><b>{euro(lodge.night_rate)}</b></font>", styles["Price"]),
          Paragraph(f"Totale soggiorno<br/><font size=13><b>{euro(lodge.total_price)}</b></font>", styles["Price"])]],
        colWidths=[3.8 * cm, 3.8 * cm],
    )
    price_table_local.setStyle(
        TableStyle(
            [
                ("BACKGROUND", (0, 0), (0, 0), colors.HexColor("#FFF4E8")),
                ("BACKGROUND", (1, 0), (1, 0), colors.HexColor("#E8F9F1")),
                ("BOX", (0, 0), (-1, -1), 0.8, colors.HexColor("#D8E2DC")),
                ("INNERGRID", (0, 0), (-1, -1), 0.8, colors.HexColor("#D8E2DC")),
                ("VALIGN", (0, 0), (-1, -1), "MIDDLE"),
                ("LEFTPADDING", (0, 0), (-1, -1), 8),
                ("RIGHTPADDING", (0, 0), (-1, -1), 8),
                ("TOPPADDING", (0, 0), (-1, -1), 6),
                ("BOTTOMPADDING", (0, 0), (-1, -1), 6),
            ]
        )
    )
    bottom = Table([[features_table, price_table_local]], colWidths=[9.7 * cm, 6.3 * cm], hAlign="LEFT")
    bottom.setStyle(
        TableStyle(
            [
                ("VALIGN", (0, 0), (-1, -1), "TOP"),
                ("LEFTPADDING", (0, 0), (-1, -1), 0),
                ("RIGHTPADDING", (0, 0), (-1, -1), 0),
                ("TOPPADDING", (0, 0), (-1, -1), 0),
                ("BOTTOMPADDING", (0, 0), (-1, -1), 0),
            ]
        )
    )

    table = Table([[top], [bottom]], colWidths=[16.8 * cm], hAlign="LEFT")
    table.setStyle(
        TableStyle(
            [
                ("BACKGROUND", (0, 0), (-1, -1), colors.white),
                ("BOX", (0, 0), (-1, -1), 1, colors.HexColor("#E8DFF7")),
                ("INNERGRID", (0, 0), (-1, -1), 0.5, colors.HexColor("#F0E6FA")),
                ("VALIGN", (0, 0), (-1, -1), "TOP"),
                ("LEFTPADDING", (0, 0), (-1, -1), 10),
                ("RIGHTPADDING", (0, 0), (-1, -1), 10),
                ("TOPPADDING", (0, 0), (-1, -1), 8),
                ("BOTTOMPADDING", (0, 0), (-1, -1), 8),
            ]
        )
    )
    return table


def colored_list(items: Iterable[tuple[str, str]], styles, background: str):
    rows = []
    for title, body in items:
        rows.append(
            [
                Paragraph(f"<b>{title}</b>", styles["Body"]),
                Paragraph(body, styles["Small"]),
            ]
        )
    table = Table(rows, colWidths=[3.7 * cm, 12.7 * cm], hAlign="LEFT")
    table.setStyle(
        TableStyle(
            [
                ("BACKGROUND", (0, 0), (-1, -1), colors.HexColor(background)),
                ("BOX", (0, 0), (-1, -1), 0.8, colors.HexColor("#DCE6F2")),
                ("INNERGRID", (0, 0), (-1, -1), 0.6, colors.HexColor("#DCE6F2")),
                ("VALIGN", (0, 0), (-1, -1), "TOP"),
                ("LEFTPADDING", (0, 0), (-1, -1), 8),
                ("RIGHTPADDING", (0, 0), (-1, -1), 8),
                ("TOPPADDING", (0, 0), (-1, -1), 8),
                ("BOTTOMPADDING", (0, 0), (-1, -1), 8),
            ]
        )
    )
    return table


def lodge_summary_cards(styles):
    accent_cycle = ["#17B890", "#3A86FF", "#FF7A59", "#8338EC", "#FFBE0B"]
    rows = []
    current = []
    for idx, lodge in enumerate(LODGE_DATA):
        accent_hex = accent_cycle[idx % len(accent_cycle)]
        accent = colors.HexColor(accent_hex)
        card = Table(
            [[
                Paragraph(f"<font color='{accent_hex}'><b>{lodge.name}</b></font>", styles["CardTitle"]),
                Paragraph(LODGE_TAGLINES[lodge.name], styles["CardLead"]),
                Paragraph(
                    f"{lodge.floor}  |  {lodge.size}  |  {lodge.guests} ospiti  |  {lodge.bedrooms} camera/e  |  {lodge.bathrooms} bagno/i",
                    styles["Small"],
                ),
                Spacer(1, 0.06 * cm),
                Paragraph(LODGE_FIT[lodge.name], styles["Body"]),
                Spacer(1, 0.08 * cm),
                Paragraph(f"<b>{euro(lodge.total_price)}</b>  totali per 10 notti", styles["BodyStrong"]),
            ]],
            colWidths=[8.25 * cm],
        )
        card.setStyle(
            TableStyle(
                [
                    ("BACKGROUND", (0, 0), (-1, -1), colors.white),
                    ("BOX", (0, 0), (-1, -1), 1.2, accent),
                    ("LEFTPADDING", (0, 0), (-1, -1), 10),
                    ("RIGHTPADDING", (0, 0), (-1, -1), 10),
                    ("TOPPADDING", (0, 0), (-1, -1), 10),
                    ("BOTTOMPADDING", (0, 0), (-1, -1), 10),
                ]
            )
        )
        current.append(card)
        if len(current) == 2:
            rows.append(current)
            current = []
    if current:
        current.append(Spacer(1, 0.1 * cm))
        rows.append(current)

    table = Table(rows, colWidths=[8.45 * cm, 8.45 * cm], hAlign="LEFT", spaceBefore=6, spaceAfter=4)
    table.setStyle(
        TableStyle(
            [
                ("VALIGN", (0, 0), (-1, -1), "TOP"),
                ("LEFTPADDING", (0, 0), (-1, -1), 0),
                ("RIGHTPADDING", (0, 0), (-1, -1), 0),
                ("TOPPADDING", (0, 0), (-1, -1), 0),
                ("BOTTOMPADDING", (0, 0), (-1, -1), 8),
            ]
        )
    )
    return table


def host_guide_table(styles):
    rows = []
    for title, kicker, body in HOST_GUIDE:
        rows.append(
            [
                Paragraph(title, styles["CardTitle"]),
                Paragraph(kicker, styles["CardLead"]),
                Paragraph(body, styles["Body"]),
            ]
        )
    table = Table(rows, colWidths=[5.6 * cm, 4.1 * cm, 7.3 * cm], hAlign="LEFT")
    table.setStyle(
        TableStyle(
            [
                ("ROWBACKGROUNDS", (0, 0), (-1, -1), [colors.HexColor("#F7FAFC"), colors.white]),
                ("BOX", (0, 0), (-1, -1), 0.8, colors.HexColor("#D8E2EC")),
                ("INNERGRID", (0, 0), (-1, -1), 0.6, colors.HexColor("#D8E2EC")),
                ("VALIGN", (0, 0), (-1, -1), "TOP"),
                ("LEFTPADDING", (0, 0), (-1, -1), 10),
                ("RIGHTPADDING", (0, 0), (-1, -1), 10),
                ("TOPPADDING", (0, 0), (-1, -1), 10),
                ("BOTTOMPADDING", (0, 0), (-1, -1), 10),
            ]
        )
    )
    return table


def economic_table(styles):
    header = [
        Paragraph("<b>Lodge</b>", styles["Small"]),
        Paragraph("<b>Totale soggiorno</b>", styles["Small"]),
        Paragraph("<b>Acconto 30%</b>", styles["Small"]),
        Paragraph("<b>Saldo 70%</b>", styles["Small"]),
    ]
    rows = [header]
    for lodge in LODGE_DATA:
        deposit = round(lodge.total_price * 0.3)
        balance = lodge.total_price - deposit
        rows.append(
            [
                Paragraph(f"<b>{lodge.name}</b>", styles["Body"]),
                Paragraph(euro(lodge.total_price), styles["Body"]),
                Paragraph(euro(deposit), styles["Body"]),
                Paragraph(euro(balance), styles["Body"]),
            ]
        )
    table = Table(rows, colWidths=[4.3 * cm, 4.2 * cm, 4.2 * cm, 4.2 * cm], repeatRows=1)
    table.setStyle(
        TableStyle(
            [
                ("BACKGROUND", (0, 0), (-1, 0), colors.HexColor("#122B49")),
                ("TEXTCOLOR", (0, 0), (-1, 0), colors.white),
                ("ROWBACKGROUNDS", (0, 1), (-1, -1), [colors.white, colors.HexColor("#F8FBFD")]),
                ("BOX", (0, 0), (-1, -1), 0.8, colors.HexColor("#CFD8E3")),
                ("INNERGRID", (0, 0), (-1, -1), 0.6, colors.HexColor("#CFD8E3")),
                ("VALIGN", (0, 0), (-1, -1), "MIDDLE"),
                ("LEFTPADDING", (0, 0), (-1, -1), 9),
                ("RIGHTPADDING", (0, 0), (-1, -1), 9),
                ("TOPPADDING", (0, 0), (-1, -1), 9),
                ("BOTTOMPADDING", (0, 0), (-1, -1), 9),
            ]
        )
    )
    return table


def quick_compare_table(styles):
    rows = [[
        Paragraph("<b>Lodge</b>", styles["Small"]),
        Paragraph("<b>Piano</b>", styles["Small"]),
        Paragraph("<b>Punto forte</b>", styles["Small"]),
        Paragraph("<b>Ideale per</b>", styles["Small"]),
        Paragraph("<b>Totale</b>", styles["Small"]),
    ]]
    for lodge in LODGE_DATA:
        rows.append([
            Paragraph(f"<b>{lodge.name}</b>", styles["Body"]),
            Paragraph(lodge.floor, styles["Body"]),
            Paragraph(LODGE_TAGLINES[lodge.name], styles["Small"]),
            Paragraph(LODGE_FIT[lodge.name], styles["Small"]),
            Paragraph(f"<b>{euro(lodge.total_price)}</b>", styles["Body"]),
        ])
    table = Table(rows, colWidths=[3.1 * cm, 2.6 * cm, 4.2 * cm, 5.0 * cm, 2.5 * cm], repeatRows=1)
    table.setStyle(
        TableStyle(
            [
                ("BACKGROUND", (0, 0), (-1, 0), colors.HexColor("#183153")),
                ("TEXTCOLOR", (0, 0), (-1, 0), colors.white),
                ("ROWBACKGROUNDS", (0, 1), (-1, -1), [colors.white, colors.HexColor("#F8FAFC")]),
                ("BOX", (0, 0), (-1, -1), 0.8, colors.HexColor("#D3DDE8")),
                ("INNERGRID", (0, 0), (-1, -1), 0.6, colors.HexColor("#D3DDE8")),
                ("VALIGN", (0, 0), (-1, -1), "TOP"),
                ("LEFTPADDING", (0, 0), (-1, -1), 8),
                ("RIGHTPADDING", (0, 0), (-1, -1), 8),
                ("TOPPADDING", (0, 0), (-1, -1), 8),
                ("BOTTOMPADDING", (0, 0), (-1, -1), 8),
            ]
        )
    )
    return table


def build_story():
    styles = make_styles()
    story: list[Flowable] = []

    hero = Image(str(ROOT / "public/images/villa/gallery/Esterni_Piscina_Giorno_01.jpg"), width=18.2 * cm, height=5.3 * cm)
    hero.hAlign = "CENTER"
    story.extend([hero, Spacer(1, 0.18 * cm)])
    story.append(Paragraph("PROPOSTA SOGGIORNO PERSONALIZZATA", styles["SectionEyebrow"]))
    story.append(Paragraph("Villa Olimpia  |  14 luglio 2026 - 24 luglio 2026  |  4 ospiti", styles["SectionTitle"]))
    story.append(
        Paragraph(
            "Gentile Sig. Belloni, mi presento: sono Francesco Nigro, host professionista di Villa Olimpia. "
            "Ho preparato una proposta piu orientata alla scelta che alla semplice descrizione, cosi da aiutarla a individuare "
            "subito la soluzione piu adatta al suo soggiorno di 10 notti per 4 ospiti.",
            styles["Body"],
        )
    )
    story.append(Spacer(1, 0.18 * cm))
    story.append(info_table(styles))
    story.append(Spacer(1, 0.22 * cm))
    story.append(Paragraph("Perche questa proposta puo funzionare bene per voi", styles["SectionEyebrow"]))
    story.append(
        Paragraph(
            "Le cinque soluzioni disponibili coprono esigenze diverse: piu spazio, piu comfort, piu luce, "
            "piu immediatezza negli spazi esterni oppure una gestione piu semplice della vita quotidiana. "
            "Questo significa che possiamo lavorare non su una disponibilita generica, ma sulla soluzione davvero piu coerente con il vostro modo di vivere la vacanza.",
            styles["Body"],
        )
    )
    story.append(Spacer(1, 0.14 * cm))
    story.append(host_guide_table(styles))
    story.append(PageBreak())
    story.append(Paragraph("Confronto rapido delle 5 soluzioni", styles["SectionTitle"]))
    story.append(
        Paragraph(
            "Qui sotto trova una lettura sintetica, pensata per fare una prima selezione rapida prima di entrare nel dettaglio di ogni lodge.",
            styles["Body"],
        )
    )
    story.append(quick_compare_table(styles))
    story.append(Spacer(1, 0.25 * cm))
    story.append(Spacer(1, 0.18 * cm))
    story.append(Paragraph("Riepilogo disponibilita e tariffe", styles["SectionTitle"]))
    story.append(price_table(styles))
    story.append(Spacer(1, 0.2 * cm))
    story.append(Paragraph("Tassa di soggiorno", styles["SectionTitle"]))
    story.append(
        Paragraph(
            "La tassa di soggiorno e pari a EUR 2,00 al giorno per persona adulta e resta esclusa dai totali sopra indicati. "
            "Va versata in struttura secondo regolamento comunale. I minori di 9 anni risultano esenti.",
            styles["Body"],
        )
    )
    story.append(Spacer(1, 0.2 * cm))
    story.append(
        Table(
            [[
                Paragraph("<b>Calcolo indicativo per 4 adulti e 10 notti</b>", styles["Body"]),
                Paragraph("<b>EUR 80,00</b>", styles["BodyStrong"]),
            ]],
            colWidths=[12.8 * cm, 4.8 * cm],
        )
    )
    story[-1].setStyle(
        TableStyle(
            [
                ("BACKGROUND", (0, 0), (-1, -1), colors.HexColor("#FFF7E8")),
                ("BOX", (0, 0), (-1, -1), 0.8, colors.HexColor("#E6D5B8")),
                ("LEFTPADDING", (0, 0), (-1, -1), 10),
                ("RIGHTPADDING", (0, 0), (-1, -1), 10),
                ("TOPPADDING", (0, 0), (-1, -1), 8),
                ("BOTTOMPADDING", (0, 0), (-1, -1), 8),
            ]
        )
    )
    story.append(Paragraph("Le 5 soluzioni disponibili in dettaglio", styles["SectionTitle"]))
    story.append(
        Paragraph(
            "Ogni scheda sotto riportata utilizza dati interni verificati di Villa Olimpia e mette in evidenza il motivo pratico per cui una soluzione "
            "potrebbe essere piu adatta di un'altra nel vostro caso specifico.",
            styles["Body"],
        )
    )
    story.append(Spacer(1, 0.25 * cm))
    for index, lodge in enumerate(LODGE_DATA):
        story.append(KeepTogether(lodge_card(lodge, styles)))
        if index != len(LODGE_DATA) - 1:
            story.append(Spacer(1, 0.16 * cm))

    story.append(Paragraph("Servizi, territorio e motivi di valore", styles["SectionTitle"]))
    story.append(
        Paragraph(
            "Una proposta forte non si gioca solo sull'appartamento. Conta molto anche la semplicita con cui si vive il soggiorno: "
            "mare vicino, servizi comodi e territorio interessante senza tempi morti negli spostamenti.",
            styles["Body"],
        )
    )
    story.append(Spacer(1, 0.2 * cm))
    story.append(Paragraph("Territorio e mete vicine", styles["SectionTitle"]))
    territory_table = Table(
        [
            [
                Image(str(ROOT / "public/images/villa/location/spiaggia-dei-gigli.jpg"), width=5.5 * cm, height=4.2 * cm),
                Image(str(ROOT / "public/images/territory/castello-aragonese-le-castella.jpg"), width=5.5 * cm, height=4.2 * cm),
                Image(str(ROOT / "public/images/territory/area-marina-protetta-capo-rizzuto.jpg"), width=5.5 * cm, height=4.2 * cm),
            ]
        ],
        colWidths=[5.7 * cm, 5.7 * cm, 5.7 * cm],
    )
    territory_table.setStyle(
        TableStyle(
            [
                ("LEFTPADDING", (0, 0), (-1, -1), 0),
                ("RIGHTPADDING", (0, 0), (-1, -1), 0),
                ("TOPPADDING", (0, 0), (-1, -1), 0),
                ("BOTTOMPADDING", (0, 0), (-1, -1), 0),
            ]
        )
    )
    story.append(territory_table)
    story.append(Spacer(1, 0.3 * cm))
    story.append(
        colored_list(
            ATTRACTIONS,
            styles,
            background="#F2FBFF",
        )
    )
    story.append(Spacer(1, 0.22 * cm))
    story.append(Paragraph("Servizi utili durante il soggiorno", styles["SectionTitle"]))
    story.append(
        colored_list(
            AMENITIES,
            styles,
            background="#FFF9EC",
        )
    )
    story.append(Spacer(1, 0.16 * cm))
    story.append(Paragraph("Riepilogo economico e policy di prenotazione", styles["SectionTitle"]))
    story.append(
        Paragraph(
            "Per facilitarle la valutazione, sotto trova il totale soggiorno per ciascuna soluzione con relativo acconto del 30% e saldo del 70%.",
            styles["Body"],
        )
    )
    story.append(Spacer(1, 0.14 * cm))
    story.append(economic_table(styles))
    story.append(Spacer(1, 0.16 * cm))
    story.append(
        Paragraph(
            "Tassa di soggiorno esclusa dai totali sopra indicati: EUR 2,00 per persona adulta a notte, "
            "da versare in struttura secondo regolamento comunale. I bambini sotto i 9 anni sono esenti.",
            styles["Small"],
        )
    )
    story.append(Spacer(1, 0.18 * cm))
    story.append(Paragraph("Policy di prenotazione", styles["SectionTitle"]))

    policy_boxes = Table(
        [
            [
                Paragraph(
                    "<b>Conferma prenotazione</b><br/>"
                    "La prenotazione si considera confermata al ricevimento di un acconto pari al 30% del totale del soggiorno.<br/><br/>"
                    "<b>Saldo</b><br/>"
                    "Il saldo restante e previsto al check-in.",
                    styles["Policy"],
                ),
                Paragraph(
                    "<b>Policy di cancellazione</b><br/>"
                    "Cancellazione gratuita fino a 30 giorni prima della data di arrivo.<br/><br/>"
                    "Oltre tale termine l'acconto versato non e rimborsabile.<br/><br/>"
                    "In caso di mancato arrivo, l'acconto viene trattenuto integralmente.",
                    styles["Policy"],
                ),
            ]
        ],
        colWidths=[8.5 * cm, 8.5 * cm],
    )
    policy_boxes.setStyle(
        TableStyle(
            [
                ("BACKGROUND", (0, 0), (0, 0), colors.HexColor("#FFF0F6")),
                ("BACKGROUND", (1, 0), (1, 0), colors.HexColor("#EEF9FF")),
                ("BOX", (0, 0), (-1, -1), 0.8, colors.HexColor("#D8E2DC")),
                ("INNERGRID", (0, 0), (-1, -1), 0.8, colors.HexColor("#D8E2DC")),
                ("VALIGN", (0, 0), (-1, -1), "TOP"),
                ("LEFTPADDING", (0, 0), (-1, -1), 12),
                ("RIGHTPADDING", (0, 0), (-1, -1), 12),
                ("TOPPADDING", (0, 0), (-1, -1), 12),
                ("BOTTOMPADDING", (0, 0), (-1, -1), 12),
            ]
        )
    )
    story.append(policy_boxes)
    story.append(Spacer(1, 0.3 * cm))
    bank_box = Table(
        [[
            Paragraph(
                "<b>Coordinate bancarie per l'acconto</b><br/>"
                "Intestatario: Francesco Nigro<br/>"
                "IBAN: IT30S0344214239000049214802<br/>"
                "BIC / SWIFT: WIDIITMM<br/>"
                "Banca: Widiba",
                styles["Policy"],
            ),
            Paragraph(
                "<b>Come procedere</b><br/>"
                "1. Mi comunichi il lodge preferito o le soluzioni finaliste.<br/>"
                "2. Le confermo immediatamente la disponibilita finale.<br/>"
                "3. Alla ricezione dell'acconto del 30% la prenotazione viene confermata.<br/>"
                "4. Le invio riepilogo definitivo e dettagli operativi per l'arrivo.",
                styles["Policy"],
            ),
        ]],
        colWidths=[8.5 * cm, 8.5 * cm],
    )
    bank_box.setStyle(
        TableStyle(
            [
                ("BACKGROUND", (0, 0), (0, 0), colors.HexColor("#FFF9EC")),
                ("BACKGROUND", (1, 0), (1, 0), colors.HexColor("#F4FBF7")),
                ("BOX", (0, 0), (-1, -1), 0.8, colors.HexColor("#D8E2DC")),
                ("INNERGRID", (0, 0), (-1, -1), 0.8, colors.HexColor("#D8E2DC")),
                ("VALIGN", (0, 0), (-1, -1), "TOP"),
                ("LEFTPADDING", (0, 0), (-1, -1), 12),
                ("RIGHTPADDING", (0, 0), (-1, -1), 12),
                ("TOPPADDING", (0, 0), (-1, -1), 12),
                ("BOTTOMPADDING", (0, 0), (-1, -1), 12),
            ]
        )
    )
    story.append(bank_box)
    story.append(Spacer(1, 0.18 * cm))
    story.append(
        Paragraph(
            "Se desidera, posso aiutarla personalmente a restringere la scelta in pochissimo tempo: "
            "basta indicarmi se per voi contano di piu spazio, vista, doppi servizi, accesso al giardino o maggiore privacy.",
            styles["Body"],
        )
    )
    story.append(Spacer(1, 0.16 * cm))
    cta = Table(
        [[
            Paragraph(
                "<font color='#FFFFFF'><b>Resto a sua completa disposizione</b></font><br/>"
                "<font color='#F8F7FF'>Per ogni chiarimento, richiesta aggiuntiva o preferenza sul lodge, "
                "saro felice di seguirla personalmente nella scelta della soluzione piu adatta e di predisporre la conferma nel modo piu semplice e rapido possibile.</font><br/><br/>"
                "<font color='#F8F7FF'>Se lo desidera, possiamo inviarle ulteriori foto dei lodge oppure fornirle ulteriori informazioni sul soggiorno, sulla struttura e sul territorio.</font><br/><br/>"
                "<font color='#FFF6E6'>Francesco Nigro  |  Host professionista Villa Olimpia</font><br/>"
                "<font color='#FFF6E6'>+39 333 577 3390  |  villaolimpiacaporizzuto@gmail.com</font>",
                styles["Policy"],
            )
        ]],
        colWidths=[17.4 * cm],
    )
    cta.setStyle(
        TableStyle(
            [
                ("BACKGROUND", (0, 0), (-1, -1), colors.HexColor("#EF476F")),
                ("BOX", (0, 0), (-1, -1), 0, colors.white),
                ("LEFTPADDING", (0, 0), (-1, -1), 16),
                ("RIGHTPADDING", (0, 0), (-1, -1), 16),
                ("TOPPADDING", (0, 0), (-1, -1), 14),
                ("BOTTOMPADDING", (0, 0), (-1, -1), 14),
            ]
        )
    )
    story.append(cta)
    return story


def main():
    OUTPUT_PDF.parent.mkdir(parents=True, exist_ok=True)
    doc = make_doc()
    story = build_story()
    doc.build(story)
    print(OUTPUT_PDF)


if __name__ == "__main__":
    main()

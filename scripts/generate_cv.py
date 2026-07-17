from pathlib import Path

from reportlab.lib.colors import HexColor
from reportlab.lib.enums import TA_RIGHT
from reportlab.lib.pagesizes import A4
from reportlab.lib.styles import ParagraphStyle, getSampleStyleSheet
from reportlab.lib.units import mm
from reportlab.pdfbase.ttfonts import TTFont
from reportlab.pdfbase import pdfmetrics
from reportlab.platypus import Paragraph, SimpleDocTemplate, Spacer, Table, TableStyle


ROOT = Path(__file__).resolve().parents[1]
OUTPUT = ROOT / "public" / "cv" / "Eduardo-Daniel-Urbina-Campos-CV.pdf"
OUTPUT.parent.mkdir(parents=True, exist_ok=True)

FONT_REGULAR = Path("C:/Windows/Fonts/arial.ttf")
FONT_BOLD = Path("C:/Windows/Fonts/arialbd.ttf")
if FONT_REGULAR.exists() and FONT_BOLD.exists():
    pdfmetrics.registerFont(TTFont("PortfolioSans", str(FONT_REGULAR)))
    pdfmetrics.registerFont(TTFont("PortfolioSansBold", str(FONT_BOLD)))
    regular, bold = "PortfolioSans", "PortfolioSansBold"
else:
    regular, bold = "Helvetica", "Helvetica-Bold"

INK = HexColor("#102019")
MUTED = HexColor("#52675f")
LIME = HexColor("#8bad1e")
LINE = HexColor("#d9e1dc")

doc = SimpleDocTemplate(
    str(OUTPUT),
    pagesize=A4,
    rightMargin=18 * mm,
    leftMargin=18 * mm,
    topMargin=13 * mm,
    bottomMargin=10 * mm,
    title="Eduardo Daniel Urbina Campos - CV",
    author="Eduardo Daniel Urbina Campos",
)

base = getSampleStyleSheet()
styles = {
    "name": ParagraphStyle("Name", parent=base["Title"], fontName=bold, fontSize=23, leading=26, textColor=INK, spaceAfter=4),
    "role": ParagraphStyle("Role", parent=base["Normal"], fontName=regular, fontSize=10.5, leading=15, textColor=LIME),
    "contact": ParagraphStyle("Contact", parent=base["Normal"], fontName=regular, fontSize=8.4, leading=12, textColor=MUTED, alignment=TA_RIGHT),
    "section": ParagraphStyle("Section", parent=base["Heading2"], fontName=bold, fontSize=9, leading=12, textColor=LIME, uppercase=True, spaceBefore=11, spaceAfter=6),
    "heading": ParagraphStyle("Heading", parent=base["Heading3"], fontName=bold, fontSize=10.5, leading=14, textColor=INK, spaceAfter=2),
    "body": ParagraphStyle("Body", parent=base["BodyText"], fontName=regular, fontSize=8.6, leading=12.5, textColor=MUTED, spaceAfter=4),
    "small": ParagraphStyle("Small", parent=base["BodyText"], fontName=regular, fontSize=7.8, leading=11.5, textColor=MUTED),
}


def section(title):
    return [Table([[Paragraph(title.upper(), styles["section"])], [""]], colWidths=[174 * mm], rowHeights=[5.5 * mm, 0.3 * mm], style=TableStyle([
        ("LINEBELOW", (0, 1), (-1, 1), 0.5, LINE),
        ("LEFTPADDING", (0, 0), (-1, -1), 0),
        ("RIGHTPADDING", (0, 0), (-1, -1), 0),
        ("TOPPADDING", (0, 0), (-1, -1), 0),
        ("BOTTOMPADDING", (0, 0), (-1, -1), 0),
    ]))]


story = []
header = Table([
    [Paragraph("Eduardo Urbina", styles["name"]), Paragraph("Mexico<br/>edurbina2002@hotmail.com<br/>linkedin.com/in/daniel-00urbina00<br/>github.com/00urbina00", styles["contact"])],
    [Paragraph("AWS FULL STACK DEVELOPER | COMPUTER ENGINEER", styles["role"]), ""],
], colWidths=[112 * mm, 62 * mm], style=TableStyle([
    ("VALIGN", (0, 0), (-1, -1), "TOP"),
    ("SPAN", (1, 0), (1, 1)),
    ("LEFTPADDING", (0, 0), (-1, -1), 0),
    ("RIGHTPADDING", (0, 0), (-1, -1), 0),
    ("TOPPADDING", (0, 0), (-1, -1), 0),
    ("BOTTOMPADDING", (0, 0), (-1, -1), 0),
]))
story.append(header)

story += section("Profile")
story.append(Paragraph(
    "AWS Full Stack Developer and Computer Engineer. I build cloud-ready applications across frontend, backend, delivery and infrastructure, with additional experience in applied AI and computer vision. I value secure systems, trustworthy data and practical engineering that can be operated end to end.",
    styles["body"],
))

story += section("Experience")
story.append(Paragraph("Application Developer | Present", styles["heading"]))
story.append(Paragraph(
    "Building and improving full stack, cloud-oriented applications with a focus on AWS, maintainable delivery and end-to-end engineering.",
    styles["body"],
))
story.append(Paragraph("Cloud Fullstack Intern | Previous role", styles["heading"]))
story.append(Paragraph(
    "Part-time cloud and full stack internship focused on programming and Amazon Web Services.",
    styles["body"],
))

story += section("Selected work")
projects = [
    ("Cashflow Finance Manager", "Live full stack finance product with secure sessions, accounts, transactions, investments, analytics, multilingual UI, Telegram onboarding and containerized delivery."),
    ("Self-hosted Homelab", "Debian and Docker environment for production and staging applications using Caddy, Cloudflare Tunnel, GitHub Actions, GHCR and lightweight monitoring."),
    ("Applied AI and Systems", "Projects include sargassum estimation, interactive computer vision, facial recognition, process scheduling simulators and compiler analysis."),
]
for title, description in projects:
    story.append(Paragraph(title, styles["heading"]))
    story.append(Paragraph(description, styles["body"]))

story += section("Technical capabilities")
skills = [
    ["APPLICATION", "React | TypeScript | JavaScript | HTML | CSS | Material UI"],
    ["BACKEND & DATA", "Node.js | Express | REST APIs | PostgreSQL | MySQL | Prisma | Python | PHP"],
    ["CLOUD & DELIVERY", "AWS | Docker | GitHub Actions | GHCR | CI/CD | Linux"],
    ["INFRASTRUCTURE", "Docker Compose | Caddy | Cloudflare Tunnel | Portainer | Observability"],
    ["AI & ENGINEERING", "TensorFlow | PyTorch | OpenCV | Machine Learning | C++ | Java | C#"],
]
skill_table = Table([[Paragraph(a, styles["small"]), Paragraph(b, styles["small"])] for a, b in skills], colWidths=[34 * mm, 140 * mm], style=TableStyle([
    ("TEXTCOLOR", (0, 0), (0, -1), LIME),
    ("VALIGN", (0, 0), (-1, -1), "TOP"),
    ("LINEBELOW", (0, 0), (-1, -2), 0.35, LINE),
    ("LEFTPADDING", (0, 0), (-1, -1), 0),
    ("RIGHTPADDING", (0, 0), (-1, -1), 4),
    ("TOPPADDING", (0, 0), (-1, -1), 5),
    ("BOTTOMPADDING", (0, 0), (-1, -1), 5),
]))
story.append(skill_table)

story += section("Certifications")
story.append(Paragraph("AWS Certified Cloud Practitioner | Jun 2026 - Jun 2029", styles["heading"]))
story.append(Paragraph("Amazon Web Services | Credly badge: 9f2d0cc3-38ff-4f47-81fd-0eb917e23c19", styles["small"]))
story.append(Paragraph("Oracle Cloud Infrastructure 2025 Certified Foundations Associate | Issued Nov 2025", styles["heading"]))
story.append(Paragraph("Oracle | Expiration date pending confirmation", styles["small"]))

story += section("Education")
story.append(Paragraph("Bachelor of Engineering in Computer Engineering", styles["heading"]))
story.append(Paragraph("University of Guadalajara | Aug 2020 - Dec 2024 | Degree completed with professional license", styles["body"]))
story.append(Paragraph("Languages: Spanish | English", styles["small"]))

doc.build(story)
print(OUTPUT)

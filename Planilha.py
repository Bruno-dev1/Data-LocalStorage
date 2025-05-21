import pyautogui as autn
import time
time.sleep(5)
autn.PAUSE=0.5

nomes = [
    "Edu", "Manoel Guerreiro",
    "Antônio Rafael",
    "kzam",
    "Pedro Paulo bio",
    "Zé", "Manuel",
    "Antônio Almeida",
    "Fábio coelho",
    "Felipe Augusto",
    "Marcos Felipe",
    "Leila",
    "Mozão",
    "Madson",
    "Giovana",
    "Marquinhos",
    "marco",
    "Kelly",
    "Wanda",
    "Murakami",
    "Felipe Coutinho",
    "Junior",
    "Vanessa",
    "Pedro rosa", "Márcio Tavares",
    "diretora Cláudia", "Cláudio santos",
    "Fabrício", "edi franco",
    "Alessandra", "Nelson",
    "Simone", "leudes",
    "Marcelo Brito",
    "Fábio pena",
    "Márcio guerdes"
]

for nome in nomes:
    autn.write(nome)
    autn.press("enter")
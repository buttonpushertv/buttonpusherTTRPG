from bs4 import BeautifulSoup
import requests

# Opening the html file. If the file
# is present in different location,
# exact location need to be mentioned
HTMLFileToBeOpened = open("Torcosia Emblems Gallery 2025-09-04-13-24.html", "r")

# with the help of beautifulSoup and html parser create soup
soup = BeautifulSoup(HTMLFileToBeOpened, "html.parser")

# Search by text with the help of lambda function
gfg = soup.find_all(lambda tag: tag.name == "figcaption")

print(gfg)

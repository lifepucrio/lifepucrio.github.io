function escolheCor(posi) {

  //linguagens
  if (calendario[posi]=='DSG1841'||calendario[posi]=='DSG1843'||
    calendario[posi]=='DSG1845'||calendario[posi]=='DSG1846'||
    calendario[posi]=='DSG1848'||calendario[posi]=='DSG1850'||
    calendario[posi]=='DSG1849'||calendario[posi]=='DSG1851'||
    calendario[posi]=='DSG1852'||calendario[posi]=='DSG1854'||
    calendario[posi]=='DSG1853'||calendario[posi]=='DSG1855'||
    calendario[posi]=='DSG1856'||calendario[posi]=='DSG1857') {
    fill(23, 173, 245, 150);
  }
  //praticas experimentais
  else if (calendario[posi]=='DSG1842'||calendario[posi]=='DSG1844'||
    calendario[posi]=='DSG1847'||calendario[posi]=='DSG1861'||calendario[posi]=='DSG1862'||
    calendario[posi]=='DSG1863'||
    calendario[posi]=='DSG1864'||calendario[posi]=='DSG1865'||
    calendario[posi]=='DSG1866'||calendario[posi]=='DSG1867') {
    fill(0, 176, 160, 150);
  }
  //estudios
  else if (calendario[posi]=='DSG1811'||calendario[posi]=='DSG1812') {
    fill(255, 122, 129, 150);
  }
  //projetos
  else if (calendario[posi]=='DSG1813'||calendario[posi]=='DSG1814'||calendario[posi]=='DSG1815'||calendario[posi]=='DSG1500'||
    calendario[posi]=='DSG1300'||calendario[posi]=='DSG1400'||
    calendario[posi]=='DSG1816'||calendario[posi]=='DSG1900'||
    calendario[posi]=='DSG1910'||calendario[posi]=='DSG1911'||calendario[posi]=='DSG1912'||calendario[posi]=='DSG1913'||
    calendario[posi]=='DSG1914'||calendario[posi]=='DSG1915'||calendario[posi]=='DSG1920'||calendario[posi]=='DSG1921'||
    calendario[posi]=='DSG1922'||calendario[posi]=='DSG1923'||calendario[posi]=='DSG1924'||calendario[posi]=='DSG1925') {
    fill(248, 0, 24, 200);
  } else if (calendario[posi]=='DSG1821'||calendario[posi]=='DSG1822'||calendario[posi]=='DSG1823'||
    calendario[posi]=='DSG1824'||calendario[posi]=='DSG1825'||calendario[posi]=='DSG1826') {
    //historia e teoria
    fill(216, 104, 223, 200);
  } else if (calendario[posi]=='DSG1830'||
    calendario[posi]=='DSG1831'||calendario[posi]=='DSG1832'||calendario[posi]=='DSG1833') {
    //optativas historia e teoria
    fill(169, 65, 171, 200);
  }else if (calendario[posi]=='DSG1801'||calendario[posi]=='DSG1802'||calendario[posi]=='DSG1803'||
    calendario[posi]=='DSG1804'||calendario[posi]=='DSG1805'||calendario[posi]=='DSG1806'||calendario[posi]=='DSG1901'||calendario[posi]=='DSG1902') {
    //conteudos estruturantes
    fill(209, 163, 175, 200);
  } else if (calendario[posi]=='DSG1145'||calendario[posi]=='DSG1424'||calendario[posi]=='DSG1930'||calendario[posi]=='DSG1931'||
    calendario[posi]=='DSG1932'||calendario[posi]=='DSG1933'||calendario[posi]=='DSG1934'||calendario[posi]=='DSG1937'||calendario[posi]=='DSG1941'||calendario[posi]=='DSG1943'||
    calendario[posi]=='DSG1944'||calendario[posi]=='DSG1945'||calendario[posi]=='DSG1946'||calendario[posi]=='DSG1948'||calendario[posi]=='DSG1949'||calendario[posi]=='DSG1950'||calendario[posi]=='DSG1951'||calendario[posi]=='DSG1952'||calendario[posi]=='DSG1953'||
    calendario[posi]=='DSG1954'||calendario[posi]=='DSG1956'||calendario[posi]=='DSG1957'||calendario[posi]=='DSG1958'||calendario[posi]=='DSG1959'||calendario[posi]=='DSG1961'||calendario[posi]=='DSG1962'||
    calendario[posi]=='DSG1963'||calendario[posi]=='DSG1964'||calendario[posi]=='DSG1965'||calendario[posi]=='DSG1966') {
    //Optativas de Ênfase
    fill(242, 179, 58, 200);
  } else if (calendario[posi]=='DSG1972'||calendario[posi]=='DSG1973'||calendario[posi]=='DSG1974'||calendario[posi]=='DSG1975'||
    calendario[posi]=='DSG1976'||calendario[posi]=='DSG1977'||calendario[posi]=='DSG1978'||calendario[posi]=='DSG1979'||calendario[posi]=='DSG1981'||calendario[posi]=='DSG1982'||
    calendario[posi]=='DSG1983'||calendario[posi]=='DSG1984'||calendario[posi]=='DSG1985'||calendario[posi]=='DSG1986'||calendario[posi]=='DSG1987'||calendario[posi]=='DSG1988'||calendario[posi]=='DSG1989'||calendario[posi]=='DSG1990'||
    calendario[posi]=='DSG1991'||calendario[posi]=='DSG1992'||calendario[posi]=='DSG1992'||calendario[posi]=='DSG1993') {
    //Optativas Oficina de Ênfase
    fill(39, 123, 61, 200);
  } else if (calendario[posi]=='DSG1969'||calendario[posi]=='DSG1995'||calendario[posi]=='DSG1996'||calendario[posi]=='DSG1997'||
    calendario[posi]=='DSG1998'||calendario[posi]=='DSG1999') {
    //Optativas Desenho de Ênfase
    fill(0, 119, 165, 200);
  } else {
    fill(150, 150, 150, 200);
  }
}

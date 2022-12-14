## Gu铆a de estilo para los commits 馃摑

Para este proyecto se est谩 utilizando [Conventional Commits](https://www.conventionalcommits.org/en/v1.0.0/) que es una convenci贸n que permite dar significado a los mensajes de los commits, que a su vez ayuda a que sean m谩s legibles para m谩quinas y humanos.

##### Resumen de la convenci贸n

```
[tipo]([谩mbito  opcional]): [descripci贸n]

[cuerpo opcional]

[nota de pie opcional]
```

Ahora veamos un ejemplo con solo los campos obligatorios seria de la siguiente manera:

`feat: cambio de estilo en el home y nueva fuente`

Un ejemplo completo con todos los campos:

```
feat(cart): nuevo estilo de layout carrito compras

Implementaci贸n de una nueva versi贸n de layout para la p谩gina del carrito

Agrega un nuevo estilo visual
```

##### Tipos de commit

- **_chore_**: cambios que no afecten el c贸digo de la aplicaci贸n.

- **_perf_**: cambios relazionados con optimizaci贸n

- **_fix_**: corrige un error (se correlaciona con PATCH en el versionado sem谩ntico).

- **_feat_**: introduce nuevas funcionalidades (se correlaciona con MINOR en el versionado sem谩ntico).

- **_build_**: cambios que afectan el sistema de compilaci贸n o dependencias externas (gulp, webpack, npm...)

- **_ci_**: cambios en nuestros archivos y scripts de configuraci贸n de CI.

- **_docs_**: cambios en la documentaci贸n.

- **_improvement_**: mejorar una implementaci贸n actual sin a帽adir nuevas caracter铆sticas ni corregir errores.

- **_refactor_**: mejora en el c贸digo que no corrige un error ni a帽ade funcionalidad.

- **_style_**: cambios cosm茅ticos en el c贸digo que no afectan a la funcionalidad (formateo, espacios en blanco, tabuladores, etc.).

- **_test_**: a帽adidos nuevos tests o corregidos estistentes.

- **_revert_**: cuando se revierte a un commit anterior.
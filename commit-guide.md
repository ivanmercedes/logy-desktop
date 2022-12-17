## Guía de estilo para los commits 📝

Para este proyecto se está utilizando [Conventional Commits](https://www.conventionalcommits.org/en/v1.0.0/) que es una convención que permite dar significado a los mensajes de los commits, que a su vez ayuda a que sean más legibles para máquinas y humanos.

##### Resumen de la convención

```
[tipo]([ámbito  opcional]): [descripción]

[cuerpo opcional]

[nota de pie opcional]
```

Ahora veamos un ejemplo con solo los campos obligatorios seria de la siguiente manera:

`feat: cambio de estilo en el home y nueva fuente`

Un ejemplo completo con todos los campos:

```
feat(cart): nuevo estilo de layout carrito compras

Implementación de una nueva versión de layout para la página del carrito

Agrega un nuevo estilo visual
```

##### Tipos de commit

- **_chore_**: cambios que no afecten el código de la aplicación.

- **_perf_**: cambios relazionados con optimización

- **_fix_**: corrige un error (se correlaciona con PATCH en el versionado semántico).

- **_feat_**: introduce nuevas funcionalidades (se correlaciona con MINOR en el versionado semántico).

- **_build_**: cambios que afectan el sistema de compilación o dependencias externas (gulp, webpack, npm...)

- **_ci_**: cambios en nuestros archivos y scripts de configuración de CI.

- **_docs_**: cambios en la documentación.

- **_improvement_**: mejorar una implementación actual sin añadir nuevas características ni corregir errores.

- **_refactor_**: mejora en el código que no corrige un error ni añade funcionalidad.

- **_style_**: cambios cosméticos en el código que no afectan a la funcionalidad (formateo, espacios en blanco, tabuladores, etc.).

- **_test_**: añadidos nuevos tests o corregidos estistentes.

- **_revert_**: cuando se revierte a un commit anterior.
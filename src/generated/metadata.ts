// AUTO-GENERATED - do not edit manually.
// Source: ISPB Participants Catalog
// To regenerate: npm run generate

import type { CatalogMetadata, Metadata } from '../catalog/types.js';

export const METADATA: Metadata = {
  "source": "ISPB Participants Catalog current snapshot",
  "sourceUrl": "https://github.com/cafeinadesign/ispb-participants/tree/main/current",
  "snapshotDate": "2026-09-02",
  "spiParticipantCount": 872,
  "pixActiveParticipantCount": 889,
  "pixInAdhesionCount": 19,
  "crosswalkRecordCount": 1780,
  "sourceDate": "2026-09-02",
  "recordCount": 889
} as const;

export const CATALOG_METADATA: CatalogMetadata = {
  "catalogUrl": "https://github.com/cafeinadesign/ispb-participants",
  "snapshotDate": "2026-09-02",
  "spiParticipantCount": 872,
  "pixActiveParticipantCount": 889,
  "pixInAdhesionCount": 19,
  "crosswalkRecordCount": 1780,
  "manifest": {
    "snapshot_date": "2026-09-02",
    "collected_at": "2026-09-02T13:40:45.911Z",
    "source_urls": {
      "spi_participants": [
        "https://www.bcb.gov.br/estabilidadefinanceira/sistemapagamentosinstantaneos",
        "https://www.bcb.gov.br/api/paginasite/sitebcb/estabilidadefinanceira/sistemapagamentosinstantaneos",
        "https://www.bcb.gov.br/content/estabilidadefinanceira/spi-pdf/participantes-spi-20260902.pdf",
        "https://www.bcb.gov.br/content/estabilidadefinanceira/spi/participantes-spi-20260902.csv"
      ],
      "pix_active_participants": [
        "https://www.bcb.gov.br/estabilidadefinanceira/pix-participantes",
        "https://www.bcb.gov.br/api/paginasite/sitebcb/estabilidadefinanceira/pix-participantes",
        "https://www.bcb.gov.br/content/estabilidadefinanceira/participantes_pix_pdf/lista-participantes-instituicoes-em-adesao-pix-20260902.pdf",
        "https://www.bcb.gov.br/content/estabilidadefinanceira/participantes_pix/lista-participantes-instituicoes-em-adesao-pix-20260902.csv"
      ],
      "pix_in_adhesion": [
        "https://www.bcb.gov.br/estabilidadefinanceira/pix-participantes",
        "https://www.bcb.gov.br/api/paginasite/sitebcb/estabilidadefinanceira/pix-participantes",
        "https://www.bcb.gov.br/content/estabilidadefinanceira/participantes_pix_pdf/lista-participantes-instituicoes-em-adesao-pix-20260902.pdf",
        "https://www.bcb.gov.br/content/estabilidadefinanceira/participantes_pix/lista-participantes-instituicoes-em-adesao-pix-20260902.csv"
      ],
      "catalog_crosswalk": [
        "https://www.bcb.gov.br/estabilidadefinanceira/sistemapagamentosinstantaneos",
        "https://www.bcb.gov.br/api/paginasite/sitebcb/estabilidadefinanceira/sistemapagamentosinstantaneos",
        "https://www.bcb.gov.br/content/estabilidadefinanceira/spi-pdf/participantes-spi-20260902.pdf",
        "https://www.bcb.gov.br/content/estabilidadefinanceira/spi/participantes-spi-20260902.csv",
        "https://www.bcb.gov.br/estabilidadefinanceira/pix-participantes",
        "https://www.bcb.gov.br/api/paginasite/sitebcb/estabilidadefinanceira/pix-participantes",
        "https://www.bcb.gov.br/content/estabilidadefinanceira/participantes_pix_pdf/lista-participantes-instituicoes-em-adesao-pix-20260902.pdf",
        "https://www.bcb.gov.br/content/estabilidadefinanceira/participantes_pix/lista-participantes-instituicoes-em-adesao-pix-20260902.csv",
        "https://www.bcb.gov.br/estabilidadefinanceira/pix-participantes",
        "https://www.bcb.gov.br/api/paginasite/sitebcb/estabilidadefinanceira/pix-participantes",
        "https://www.bcb.gov.br/content/estabilidadefinanceira/participantes_pix_pdf/lista-participantes-instituicoes-em-adesao-pix-20260902.pdf",
        "https://www.bcb.gov.br/content/estabilidadefinanceira/participantes_pix/lista-participantes-instituicoes-em-adesao-pix-20260902.csv"
      ]
    },
    "source_publication_dates": {
      "spi_participants": "2026-09-02",
      "pix_active_participants": "2026-09-02",
      "pix_in_adhesion": "2026-09-02",
      "catalog_crosswalk": null
    },
    "dataset_hashes": {
      "spi_participants": {
        "csv_sha256": "8c13a62d3c8452c23203a97dcf1a1a6ec92d3bceef6a421f281ad661c236354e",
        "json_sha256": "ffbb71c49b5fcdf3eb6e66eed65ea560def3349fdc4be95db37c0459a3f72abf"
      },
      "pix_active_participants": {
        "csv_sha256": "d79a80d551bae1d185f73d957eb109dbde4ff7103872f1fa2cdb076a5c574833",
        "json_sha256": "f0087379044fa3a46763650d8c479d9007542aaa1fc353c0f60e5df1240e4e1e"
      },
      "pix_in_adhesion": {
        "csv_sha256": "a220865b2e66a3eea568ac594cf37f2cc0db68bf6b3969154dbbe2d125dff3e4",
        "json_sha256": "b8d2f6446b7b65f5551d8690cc7839b4fd52c0046b75b8c93ae5c58aa94e50b5"
      },
      "catalog_crosswalk": {
        "csv_sha256": "066726196de72f22135b196821da754405e2043f359b715304daebc95ddf1a86",
        "json_sha256": "557bef546f1d5a4dda9f60b528f6a3045895fe45a315a10632df9b2809429927"
      }
    },
    "record_counts": {
      "spi_participants": 872,
      "pix_active_participants": 889,
      "pix_in_adhesion": 19,
      "catalog_crosswalk": 1780
    },
    "schema_versions": {
      "spi_participants": "1.0.0",
      "pix_active_participants": "1.0.0",
      "pix_in_adhesion": "1.0.0",
      "catalog_crosswalk": "1.0.0"
    },
    "pipeline_version": "2026.04.09",
    "validation_status": {
      "status": "passed",
      "checks": [
        "schema:spi_participants",
        "schema:pix_active_participants",
        "schema:pix_in_adhesion",
        "schema:catalog_crosswalk",
        "crosswalk:one-row-per-source-record",
        "integrity:row-counts"
      ]
    },
    "warnings": [],
    "errors": []
  },
  "sources": {
    "spi_participants": [
      "https://www.bcb.gov.br/estabilidadefinanceira/sistemapagamentosinstantaneos",
      "https://www.bcb.gov.br/api/paginasite/sitebcb/estabilidadefinanceira/sistemapagamentosinstantaneos",
      "https://www.bcb.gov.br/content/estabilidadefinanceira/spi-pdf/participantes-spi-20260902.pdf",
      "https://www.bcb.gov.br/content/estabilidadefinanceira/spi/participantes-spi-20260902.csv"
    ],
    "pix_active_participants": [
      "https://www.bcb.gov.br/estabilidadefinanceira/pix-participantes",
      "https://www.bcb.gov.br/api/paginasite/sitebcb/estabilidadefinanceira/pix-participantes",
      "https://www.bcb.gov.br/content/estabilidadefinanceira/participantes_pix_pdf/lista-participantes-instituicoes-em-adesao-pix-20260902.pdf",
      "https://www.bcb.gov.br/content/estabilidadefinanceira/participantes_pix/lista-participantes-instituicoes-em-adesao-pix-20260902.csv"
    ],
    "pix_in_adhesion": [
      "https://www.bcb.gov.br/estabilidadefinanceira/pix-participantes",
      "https://www.bcb.gov.br/api/paginasite/sitebcb/estabilidadefinanceira/pix-participantes",
      "https://www.bcb.gov.br/content/estabilidadefinanceira/participantes_pix_pdf/lista-participantes-instituicoes-em-adesao-pix-20260902.pdf",
      "https://www.bcb.gov.br/content/estabilidadefinanceira/participantes_pix/lista-participantes-instituicoes-em-adesao-pix-20260902.csv"
    ],
    "catalog_crosswalk": [
      "https://www.bcb.gov.br/estabilidadefinanceira/sistemapagamentosinstantaneos",
      "https://www.bcb.gov.br/api/paginasite/sitebcb/estabilidadefinanceira/sistemapagamentosinstantaneos",
      "https://www.bcb.gov.br/content/estabilidadefinanceira/spi-pdf/participantes-spi-20260902.pdf",
      "https://www.bcb.gov.br/content/estabilidadefinanceira/spi/participantes-spi-20260902.csv",
      "https://www.bcb.gov.br/estabilidadefinanceira/pix-participantes",
      "https://www.bcb.gov.br/api/paginasite/sitebcb/estabilidadefinanceira/pix-participantes",
      "https://www.bcb.gov.br/content/estabilidadefinanceira/participantes_pix_pdf/lista-participantes-instituicoes-em-adesao-pix-20260902.pdf",
      "https://www.bcb.gov.br/content/estabilidadefinanceira/participantes_pix/lista-participantes-instituicoes-em-adesao-pix-20260902.csv",
      "https://www.bcb.gov.br/estabilidadefinanceira/pix-participantes",
      "https://www.bcb.gov.br/api/paginasite/sitebcb/estabilidadefinanceira/pix-participantes",
      "https://www.bcb.gov.br/content/estabilidadefinanceira/participantes_pix_pdf/lista-participantes-instituicoes-em-adesao-pix-20260902.pdf",
      "https://www.bcb.gov.br/content/estabilidadefinanceira/participantes_pix/lista-participantes-instituicoes-em-adesao-pix-20260902.csv"
    ]
  }
} as const;

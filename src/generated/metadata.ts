// AUTO-GENERATED - do not edit manually.
// Source: ISPB Participants Catalog
// To regenerate: npm run generate

import type { CatalogMetadata, Metadata } from '../catalog/types.js';

export const METADATA: Metadata = {
  "source": "ISPB Participants Catalog current snapshot",
  "sourceUrl": "https://github.com/cafeinadesign/ispb-participants/tree/main/current",
  "snapshotDate": "2026-10-06",
  "spiParticipantCount": 866,
  "pixActiveParticipantCount": 882,
  "pixInAdhesionCount": 19,
  "crosswalkRecordCount": 1767,
  "sourceDate": "2026-10-06",
  "recordCount": 882
} as const;

export const CATALOG_METADATA: CatalogMetadata = {
  "catalogUrl": "https://github.com/cafeinadesign/ispb-participants",
  "snapshotDate": "2026-10-06",
  "spiParticipantCount": 866,
  "pixActiveParticipantCount": 882,
  "pixInAdhesionCount": 19,
  "crosswalkRecordCount": 1767,
  "manifest": {
    "snapshot_date": "2026-10-06",
    "collected_at": "2026-10-06T15:57:29.926Z",
    "source_urls": {
      "spi_participants": [
        "https://www.bcb.gov.br/estabilidadefinanceira/sistemapagamentosinstantaneos",
        "https://www.bcb.gov.br/api/paginasite/sitebcb/estabilidadefinanceira/sistemapagamentosinstantaneos",
        "https://www.bcb.gov.br/content/estabilidadefinanceira/spi-pdf/participantes-spi-20261006.pdf",
        "https://www.bcb.gov.br/content/estabilidadefinanceira/spi/participantes-spi-20261006.csv"
      ],
      "pix_active_participants": [
        "https://www.bcb.gov.br/estabilidadefinanceira/pix-participantes",
        "https://www.bcb.gov.br/api/paginasite/sitebcb/estabilidadefinanceira/pix-participantes",
        "https://www.bcb.gov.br/content/estabilidadefinanceira/participantes_pix_pdf/lista-participantes-instituicoes-em-adesao-pix-20261006.pdf",
        "https://www.bcb.gov.br/content/estabilidadefinanceira/participantes_pix/lista-participantes-instituicoes-em-adesao-pix-20261006.csv"
      ],
      "pix_in_adhesion": [
        "https://www.bcb.gov.br/estabilidadefinanceira/pix-participantes",
        "https://www.bcb.gov.br/api/paginasite/sitebcb/estabilidadefinanceira/pix-participantes",
        "https://www.bcb.gov.br/content/estabilidadefinanceira/participantes_pix_pdf/lista-participantes-instituicoes-em-adesao-pix-20261006.pdf",
        "https://www.bcb.gov.br/content/estabilidadefinanceira/participantes_pix/lista-participantes-instituicoes-em-adesao-pix-20261006.csv"
      ],
      "catalog_crosswalk": [
        "https://www.bcb.gov.br/estabilidadefinanceira/sistemapagamentosinstantaneos",
        "https://www.bcb.gov.br/api/paginasite/sitebcb/estabilidadefinanceira/sistemapagamentosinstantaneos",
        "https://www.bcb.gov.br/content/estabilidadefinanceira/spi-pdf/participantes-spi-20261006.pdf",
        "https://www.bcb.gov.br/content/estabilidadefinanceira/spi/participantes-spi-20261006.csv",
        "https://www.bcb.gov.br/estabilidadefinanceira/pix-participantes",
        "https://www.bcb.gov.br/api/paginasite/sitebcb/estabilidadefinanceira/pix-participantes",
        "https://www.bcb.gov.br/content/estabilidadefinanceira/participantes_pix_pdf/lista-participantes-instituicoes-em-adesao-pix-20261006.pdf",
        "https://www.bcb.gov.br/content/estabilidadefinanceira/participantes_pix/lista-participantes-instituicoes-em-adesao-pix-20261006.csv",
        "https://www.bcb.gov.br/estabilidadefinanceira/pix-participantes",
        "https://www.bcb.gov.br/api/paginasite/sitebcb/estabilidadefinanceira/pix-participantes",
        "https://www.bcb.gov.br/content/estabilidadefinanceira/participantes_pix_pdf/lista-participantes-instituicoes-em-adesao-pix-20261006.pdf",
        "https://www.bcb.gov.br/content/estabilidadefinanceira/participantes_pix/lista-participantes-instituicoes-em-adesao-pix-20261006.csv"
      ]
    },
    "source_publication_dates": {
      "spi_participants": "2026-10-06",
      "pix_active_participants": "2026-10-06",
      "pix_in_adhesion": "2026-10-06",
      "catalog_crosswalk": null
    },
    "dataset_hashes": {
      "spi_participants": {
        "csv_sha256": "267fe94199898596ab40f5d59f1743163affbfb8d989fe976d8629a4ce1371d5",
        "json_sha256": "2d9d5ced3623edcd122323060e598b2c12693f536a6a88e98d3e57c25fe71cee"
      },
      "pix_active_participants": {
        "csv_sha256": "5c09cbc3608ae5793ca8997d3edf0dcfc252d53831f117055e8a5ed27a55f3ff",
        "json_sha256": "aa9872614699599412ce7a7ea6661f3ced0e95696fd0873822f808cec87ac240"
      },
      "pix_in_adhesion": {
        "csv_sha256": "fe0953e39f9903dd871419f1bb80879287f83aac097f12bb69b044cb70a97d61",
        "json_sha256": "bc598c0811f121710ddf14c84d3cebf9d17d5e403ba7b2800d87d5d94388563a"
      },
      "catalog_crosswalk": {
        "csv_sha256": "12ed5c9a376d41a70263e07b8b879844185dff4ead2b50e50802d819d9373be1",
        "json_sha256": "36468d8883bb9218ea42f90ea543e46bec614820f2ea8c264c097c76be277423"
      }
    },
    "record_counts": {
      "spi_participants": 866,
      "pix_active_participants": 882,
      "pix_in_adhesion": 19,
      "catalog_crosswalk": 1767
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
      "https://www.bcb.gov.br/content/estabilidadefinanceira/spi-pdf/participantes-spi-20261006.pdf",
      "https://www.bcb.gov.br/content/estabilidadefinanceira/spi/participantes-spi-20261006.csv"
    ],
    "pix_active_participants": [
      "https://www.bcb.gov.br/estabilidadefinanceira/pix-participantes",
      "https://www.bcb.gov.br/api/paginasite/sitebcb/estabilidadefinanceira/pix-participantes",
      "https://www.bcb.gov.br/content/estabilidadefinanceira/participantes_pix_pdf/lista-participantes-instituicoes-em-adesao-pix-20261006.pdf",
      "https://www.bcb.gov.br/content/estabilidadefinanceira/participantes_pix/lista-participantes-instituicoes-em-adesao-pix-20261006.csv"
    ],
    "pix_in_adhesion": [
      "https://www.bcb.gov.br/estabilidadefinanceira/pix-participantes",
      "https://www.bcb.gov.br/api/paginasite/sitebcb/estabilidadefinanceira/pix-participantes",
      "https://www.bcb.gov.br/content/estabilidadefinanceira/participantes_pix_pdf/lista-participantes-instituicoes-em-adesao-pix-20261006.pdf",
      "https://www.bcb.gov.br/content/estabilidadefinanceira/participantes_pix/lista-participantes-instituicoes-em-adesao-pix-20261006.csv"
    ],
    "catalog_crosswalk": [
      "https://www.bcb.gov.br/estabilidadefinanceira/sistemapagamentosinstantaneos",
      "https://www.bcb.gov.br/api/paginasite/sitebcb/estabilidadefinanceira/sistemapagamentosinstantaneos",
      "https://www.bcb.gov.br/content/estabilidadefinanceira/spi-pdf/participantes-spi-20261006.pdf",
      "https://www.bcb.gov.br/content/estabilidadefinanceira/spi/participantes-spi-20261006.csv",
      "https://www.bcb.gov.br/estabilidadefinanceira/pix-participantes",
      "https://www.bcb.gov.br/api/paginasite/sitebcb/estabilidadefinanceira/pix-participantes",
      "https://www.bcb.gov.br/content/estabilidadefinanceira/participantes_pix_pdf/lista-participantes-instituicoes-em-adesao-pix-20261006.pdf",
      "https://www.bcb.gov.br/content/estabilidadefinanceira/participantes_pix/lista-participantes-instituicoes-em-adesao-pix-20261006.csv",
      "https://www.bcb.gov.br/estabilidadefinanceira/pix-participantes",
      "https://www.bcb.gov.br/api/paginasite/sitebcb/estabilidadefinanceira/pix-participantes",
      "https://www.bcb.gov.br/content/estabilidadefinanceira/participantes_pix_pdf/lista-participantes-instituicoes-em-adesao-pix-20261006.pdf",
      "https://www.bcb.gov.br/content/estabilidadefinanceira/participantes_pix/lista-participantes-instituicoes-em-adesao-pix-20261006.csv"
    ]
  }
} as const;

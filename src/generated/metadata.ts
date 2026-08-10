// AUTO-GENERATED - do not edit manually.
// Source: ISPB Participants Catalog
// To regenerate: npm run generate

import type { CatalogMetadata, Metadata } from '../catalog/types.js';

export const METADATA: Metadata = {
  "source": "ISPB Participants Catalog current snapshot",
  "sourceUrl": "https://github.com/cafeinadesign/ispb-participants/tree/main/current",
  "snapshotDate": "2026-08-10",
  "spiParticipantCount": 872,
  "pixActiveParticipantCount": 898,
  "pixInAdhesionCount": 17,
  "crosswalkRecordCount": 1787,
  "sourceDate": "2026-08-10",
  "recordCount": 898
} as const;

export const CATALOG_METADATA: CatalogMetadata = {
  "catalogUrl": "https://github.com/cafeinadesign/ispb-participants",
  "snapshotDate": "2026-08-10",
  "spiParticipantCount": 872,
  "pixActiveParticipantCount": 898,
  "pixInAdhesionCount": 17,
  "crosswalkRecordCount": 1787,
  "manifest": {
    "snapshot_date": "2026-08-10",
    "collected_at": "2026-08-10T10:36:01.613Z",
    "source_urls": {
      "spi_participants": [
        "https://www.bcb.gov.br/estabilidadefinanceira/sistemapagamentosinstantaneos",
        "https://www.bcb.gov.br/api/paginasite/sitebcb/estabilidadefinanceira/sistemapagamentosinstantaneos",
        "https://www.bcb.gov.br/content/estabilidadefinanceira/spi-pdf/participantes-spi-20260810.pdf",
        "https://www.bcb.gov.br/content/estabilidadefinanceira/spi/participantes-spi-20260810.csv"
      ],
      "pix_active_participants": [
        "https://www.bcb.gov.br/estabilidadefinanceira/pix-participantes",
        "https://www.bcb.gov.br/api/paginasite/sitebcb/estabilidadefinanceira/pix-participantes",
        "https://www.bcb.gov.br/content/estabilidadefinanceira/participantes_pix_pdf/lista-participantes-instituicoes-em-adesao-pix-20260810.pdf",
        "https://www.bcb.gov.br/content/estabilidadefinanceira/participantes_pix/lista-participantes-instituicoes-em-adesao-pix-20260810.csv"
      ],
      "pix_in_adhesion": [
        "https://www.bcb.gov.br/estabilidadefinanceira/pix-participantes",
        "https://www.bcb.gov.br/api/paginasite/sitebcb/estabilidadefinanceira/pix-participantes",
        "https://www.bcb.gov.br/content/estabilidadefinanceira/participantes_pix_pdf/lista-participantes-instituicoes-em-adesao-pix-20260810.pdf",
        "https://www.bcb.gov.br/content/estabilidadefinanceira/participantes_pix/lista-participantes-instituicoes-em-adesao-pix-20260810.csv"
      ],
      "catalog_crosswalk": [
        "https://www.bcb.gov.br/estabilidadefinanceira/sistemapagamentosinstantaneos",
        "https://www.bcb.gov.br/api/paginasite/sitebcb/estabilidadefinanceira/sistemapagamentosinstantaneos",
        "https://www.bcb.gov.br/content/estabilidadefinanceira/spi-pdf/participantes-spi-20260810.pdf",
        "https://www.bcb.gov.br/content/estabilidadefinanceira/spi/participantes-spi-20260810.csv",
        "https://www.bcb.gov.br/estabilidadefinanceira/pix-participantes",
        "https://www.bcb.gov.br/api/paginasite/sitebcb/estabilidadefinanceira/pix-participantes",
        "https://www.bcb.gov.br/content/estabilidadefinanceira/participantes_pix_pdf/lista-participantes-instituicoes-em-adesao-pix-20260810.pdf",
        "https://www.bcb.gov.br/content/estabilidadefinanceira/participantes_pix/lista-participantes-instituicoes-em-adesao-pix-20260810.csv",
        "https://www.bcb.gov.br/estabilidadefinanceira/pix-participantes",
        "https://www.bcb.gov.br/api/paginasite/sitebcb/estabilidadefinanceira/pix-participantes",
        "https://www.bcb.gov.br/content/estabilidadefinanceira/participantes_pix_pdf/lista-participantes-instituicoes-em-adesao-pix-20260810.pdf",
        "https://www.bcb.gov.br/content/estabilidadefinanceira/participantes_pix/lista-participantes-instituicoes-em-adesao-pix-20260810.csv"
      ]
    },
    "source_publication_dates": {
      "spi_participants": "2026-08-10",
      "pix_active_participants": "2026-08-10",
      "pix_in_adhesion": "2026-08-10",
      "catalog_crosswalk": null
    },
    "dataset_hashes": {
      "spi_participants": {
        "csv_sha256": "874d3c44599f482751c149c15e43122aa27d09ad7e475d23dc3840cc4b58b176",
        "json_sha256": "6cf28c4f78e87b0b2ebffb0dd2462a1c97c788f4d75feebe538722c7f1fef561"
      },
      "pix_active_participants": {
        "csv_sha256": "965809cbc3a2334724dd77f63096a586980d0bfc275c8fa40c0cec033d4ee293",
        "json_sha256": "73f2ed20d5dd356282d75fc141ac1ae92e18fe65bbece66507baa1c845c5079d"
      },
      "pix_in_adhesion": {
        "csv_sha256": "e44e99230bef32fc5e0b64715458cef1e6706f161f8c70f571bac31b38ce7322",
        "json_sha256": "fbde1f2b9d47f9c4020244dec64a86546dc5afef1dec7328f228c1e9910f82b4"
      },
      "catalog_crosswalk": {
        "csv_sha256": "851d26c009bdf2c1a19b421f618e216ad0fb497f27339543c65a9b85bc2cc0c4",
        "json_sha256": "a227d4f7209e317f1a3b02adfeab9c223b67ca07a5dc29f5f5bff0ac1d8ebcad"
      }
    },
    "record_counts": {
      "spi_participants": 872,
      "pix_active_participants": 898,
      "pix_in_adhesion": 17,
      "catalog_crosswalk": 1787
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
      "https://www.bcb.gov.br/content/estabilidadefinanceira/spi-pdf/participantes-spi-20260810.pdf",
      "https://www.bcb.gov.br/content/estabilidadefinanceira/spi/participantes-spi-20260810.csv"
    ],
    "pix_active_participants": [
      "https://www.bcb.gov.br/estabilidadefinanceira/pix-participantes",
      "https://www.bcb.gov.br/api/paginasite/sitebcb/estabilidadefinanceira/pix-participantes",
      "https://www.bcb.gov.br/content/estabilidadefinanceira/participantes_pix_pdf/lista-participantes-instituicoes-em-adesao-pix-20260810.pdf",
      "https://www.bcb.gov.br/content/estabilidadefinanceira/participantes_pix/lista-participantes-instituicoes-em-adesao-pix-20260810.csv"
    ],
    "pix_in_adhesion": [
      "https://www.bcb.gov.br/estabilidadefinanceira/pix-participantes",
      "https://www.bcb.gov.br/api/paginasite/sitebcb/estabilidadefinanceira/pix-participantes",
      "https://www.bcb.gov.br/content/estabilidadefinanceira/participantes_pix_pdf/lista-participantes-instituicoes-em-adesao-pix-20260810.pdf",
      "https://www.bcb.gov.br/content/estabilidadefinanceira/participantes_pix/lista-participantes-instituicoes-em-adesao-pix-20260810.csv"
    ],
    "catalog_crosswalk": [
      "https://www.bcb.gov.br/estabilidadefinanceira/sistemapagamentosinstantaneos",
      "https://www.bcb.gov.br/api/paginasite/sitebcb/estabilidadefinanceira/sistemapagamentosinstantaneos",
      "https://www.bcb.gov.br/content/estabilidadefinanceira/spi-pdf/participantes-spi-20260810.pdf",
      "https://www.bcb.gov.br/content/estabilidadefinanceira/spi/participantes-spi-20260810.csv",
      "https://www.bcb.gov.br/estabilidadefinanceira/pix-participantes",
      "https://www.bcb.gov.br/api/paginasite/sitebcb/estabilidadefinanceira/pix-participantes",
      "https://www.bcb.gov.br/content/estabilidadefinanceira/participantes_pix_pdf/lista-participantes-instituicoes-em-adesao-pix-20260810.pdf",
      "https://www.bcb.gov.br/content/estabilidadefinanceira/participantes_pix/lista-participantes-instituicoes-em-adesao-pix-20260810.csv",
      "https://www.bcb.gov.br/estabilidadefinanceira/pix-participantes",
      "https://www.bcb.gov.br/api/paginasite/sitebcb/estabilidadefinanceira/pix-participantes",
      "https://www.bcb.gov.br/content/estabilidadefinanceira/participantes_pix_pdf/lista-participantes-instituicoes-em-adesao-pix-20260810.pdf",
      "https://www.bcb.gov.br/content/estabilidadefinanceira/participantes_pix/lista-participantes-instituicoes-em-adesao-pix-20260810.csv"
    ]
  }
} as const;
